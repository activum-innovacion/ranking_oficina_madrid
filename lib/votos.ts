import { Redis } from "@upstash/redis";
import { EMPLEADOS, SLUGS } from "./empleados";

// ---------------------------------------------------------------------------
// Periodo de votación: clave por mes en zona horaria de Madrid.
// El día 1 de cada mes la clave cambia automáticamente y el ranking se reinicia
// sin necesidad de ningún cron ni borrado manual.
// ---------------------------------------------------------------------------
export function periodoActual(): string {
  // Ejemplo de salida: "2026-06"
  const fmt = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
  });
  const partes = fmt.formatToParts(new Date());
  const year = partes.find((p) => p.type === "year")?.value ?? "0000";
  const month = (partes.find((p) => p.type === "month")?.value ?? "0").padStart(2, "0");
  return `${year}-${month}`;
}

export function etiquetaPeriodo(periodo: string): string {
  const [year, month] = periodo.split("-").map(Number);
  const fmt = new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" });
  // month es 1-12; el Date usa 0-11.
  const fecha = new Date(Date.UTC(year, (month || 1) - 1, 1));
  const texto = fmt.format(fecha);
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function clavePeriodo(periodo: string): string {
  return `votos:${periodo}`;
}

// ---------------------------------------------------------------------------
// Almacenamiento: Upstash Redis si está configurado, si no, memoria (solo dev).
// ---------------------------------------------------------------------------
const hayRedis =
  !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) ||
  !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);

const redis = hayRedis
  ? (process.env.UPSTASH_REDIS_REST_URL
      ? Redis.fromEnv()
      : new Redis({
          url: process.env.KV_REST_API_URL!,
          token: process.env.KV_REST_API_TOKEN!,
        }))
  : null;

// Fallback en memoria (no persistente; se reinicia en cada cold start).
const memoria = new Map<string, Map<string, number>>();

function memDe(periodo: string): Map<string, number> {
  const clave = clavePeriodo(periodo);
  if (!memoria.has(clave)) memoria.set(clave, new Map());
  return memoria.get(clave)!;
}

export type Resultado = {
  slug: string;
  votos: number;
};

export async function registrarVoto(slug: string): Promise<number> {
  if (!SLUGS.has(slug)) throw new Error("Empleado no válido");
  const periodo = periodoActual();
  const clave = clavePeriodo(periodo);

  if (redis) {
    return (await redis.hincrby(clave, slug, 1)) as number;
  }
  const mapa = memDe(periodo);
  const nuevo = (mapa.get(slug) ?? 0) + 1;
  mapa.set(slug, nuevo);
  return nuevo;
}

export async function obtenerResultados(): Promise<{
  periodo: string;
  resultados: Resultado[];
  total: number;
  persistente: boolean;
}> {
  const periodo = periodoActual();
  const clave = clavePeriodo(periodo);

  let conteos: Record<string, number> = {};
  if (redis) {
    const data = (await redis.hgetall<Record<string, number>>(clave)) ?? {};
    conteos = data;
  } else {
    const mapa = memDe(periodo);
    conteos = Object.fromEntries(mapa.entries());
  }

  const resultados: Resultado[] = EMPLEADOS.map((e) => ({
    slug: e.slug,
    votos: Number(conteos[e.slug] ?? 0),
  })).sort((a, b) => b.votos - a.votos);

  const total = resultados.reduce((acc, r) => acc + r.votos, 0);

  return { periodo, resultados, total, persistente: !!redis };
}
