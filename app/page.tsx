"use client";

import { useEffect, useMemo, useState } from "react";
import { EMPLEADOS } from "@/lib/empleados";

type Resultado = { slug: string; votos: number };
type Data = {
  periodo: string;
  etiqueta: string;
  resultados: Resultado[];
  total: number;
  persistente: boolean;
};

const MEDALLAS = ["🥇", "🥈", "🥉"];

function iniciales(nombre: string): string {
  return nombre.trim().charAt(0).toUpperCase();
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null);
  const [seleccion, setSeleccion] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [yaVotado, setYaVotado] = useState(false);
  const [mensaje, setMensaje] = useState<{ tipo: "ok" | "err"; texto: string } | null>(
    null
  );

  const nombrePorSlug = useMemo(() => {
    const m = new Map(EMPLEADOS.map((e) => [e.slug, e.nombre]));
    return (slug: string) => m.get(slug) ?? slug;
  }, []);

  async function cargar() {
    try {
      const res = await fetch("/api/resultados", { cache: "no-store" });
      const json = (await res.json()) as Data;
      setData(json);
    } catch {
      /* noop */
    }
  }

  useEffect(() => {
    cargar();
    if (typeof window !== "undefined") {
      const periodoVotado = window.localStorage.getItem("activum_voto_periodo");
      // Se resuelve realmente contra el periodo del servidor más abajo.
      if (periodoVotado) setYaVotado(true);
    }
  }, []);

  // Sincroniza el flag local con el periodo real del servidor.
  useEffect(() => {
    if (!data) return;
    if (typeof window === "undefined") return;
    const periodoVotado = window.localStorage.getItem("activum_voto_periodo");
    setYaVotado(periodoVotado === data.periodo);
  }, [data]);

  async function votar() {
    if (!seleccion || enviando) return;
    setEnviando(true);
    setMensaje(null);
    try {
      const res = await fetch("/api/votar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: seleccion }),
      });
      const json = await res.json();
      if (!res.ok) {
        if (res.status === 409) {
          setYaVotado(true);
          window.localStorage.setItem("activum_voto_periodo", json.periodo ?? "");
        }
        setMensaje({ tipo: "err", texto: json.error ?? "No se pudo registrar el voto." });
        return;
      }
      setData(json as Data);
      setYaVotado(true);
      window.localStorage.setItem("activum_voto_periodo", json.periodo ?? "");
      setMensaje({
        tipo: "ok",
        texto: `¡Voto registrado para ${nombrePorSlug(seleccion)}! Gracias por participar.`,
      });
    } catch {
      setMensaje({ tipo: "err", texto: "Error de red. Inténtalo de nuevo." });
    } finally {
      setEnviando(false);
    }
  }

  const maxVotos = data ? Math.max(1, ...data.resultados.map((r) => r.votos)) : 1;

  return (
    <>
      <header className="hero">
        <div className="hero__inner">
          <div className="brand">
            <span className="brand__dot" />
            Activum
          </div>
          <h1>
            Empleado del <span className="accent">Mes</span>
            <br />
            Oficinas de Madrid
          </h1>
          <p className="lead">
            Reconoce a quien marca la diferencia. Vota a tu compañero o compañera y
            consulta el ranking en directo.
          </p>
          <div className="premio">
            <span className="premio__emoji">🧁</span>
            <span>
              El empleado del mes gana un <strong>pastelito</strong>.
            </span>
          </div>
          {data && (
            <div className="periodo-chip">
              <span>●</span> Votación de {data.etiqueta} · se reinicia el día 1
            </div>
          )}
        </div>
      </header>

      <main className="container">
        {data && !data.persistente && (
          <div className="dev-note">
            Modo local: los votos no se guardan de forma permanente. Configura Upstash
            Redis en Vercel para activar el almacenamiento persistente.
          </div>
        )}

        <section className="panel votar">
          <div className="section-title">
            <h2>Emite tu voto</h2>
            <span className="muted">Un voto por persona y mes</span>
          </div>

          <div className="grid" role="radiogroup" aria-label="Candidatos">
            {EMPLEADOS.map((e) => {
              const sel = seleccion === e.slug;
              return (
                <button
                  key={e.slug}
                  type="button"
                  role="radio"
                  aria-checked={sel}
                  className={`candidato${sel ? " selected" : ""}`}
                  onClick={() => setSeleccion(e.slug)}
                  disabled={yaVotado || enviando}
                >
                  <span className="avatar">{iniciales(e.nombre)}</span>
                  <span className="nombre">{e.nombre}</span>
                </button>
              );
            })}
          </div>

          <div className="acciones">
            <button
              className="btn"
              onClick={votar}
              disabled={!seleccion || yaVotado || enviando}
            >
              {enviando ? "Enviando…" : yaVotado ? "Ya has votado" : "Votar"}
            </button>
            {mensaje && (
              <span className={`aviso ${mensaje.tipo}`}>{mensaje.texto}</span>
            )}
            {yaVotado && !mensaje && (
              <span className="aviso ok">
                Gracias, ya has votado este mes. Vuelve el día 1.
              </span>
            )}
          </div>
        </section>

        <section className="panel ranking">
          <div className="section-title">
            <h2>Ranking en directo</h2>
            <span className="muted">
              {data ? `${data.total} voto${data.total === 1 ? "" : "s"} este mes` : "…"}
            </span>
          </div>

          <ol className="rank-list">
            {data?.resultados.map((r, i) => {
              const topClass = i < 3 ? ` top${i + 1}` : "";
              const pct = Math.round((r.votos / maxVotos) * 100);
              return (
                <li key={r.slug} className={`rank-item${topClass}`}>
                  <div className="rank-pos">{i + 1}</div>
                  <div className="rank-main">
                    <div className="rank-name">
                      {i < 3 && <span className="medal">{MEDALLAS[i]}</span>}
                      {nombrePorSlug(r.slug)}
                      {i === 0 && r.votos > 0 && (
                        <span className="premio-pill">🧁 Pastelito</span>
                      )}
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <div className="rank-votes">
                    <b>{r.votos}</b>
                    <span>votos</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      </main>

      <footer className="footer">
        Activum · Reconocimiento interno — Oficinas de Madrid · El ranking se reinicia
        automáticamente el primer día de cada mes.
      </footer>
    </>
  );
}
