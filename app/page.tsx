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
type Ganador = {
  periodo: string;
  etiqueta: string;
  slug: string;
  nombre: string;
  votos: number;
};

function iniciales(nombre: string): string {
  return nombre.trim().charAt(0).toUpperCase();
}

const CONFETTI_COLORS = ["#8e2d44", "#c06078", "#d4c3b3", "#ebe3db", "#f5f3f2"];

function Confetti() {
  // Valores deterministas (por índice) para evitar desajustes de hidratación.
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="confetti__piece"
          style={{
            left: `${(i * 47) % 100}%`,
            background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
            animationDelay: `${((i * 41) % 280) / 100}s`,
            animationDuration: `${2.6 + (i % 5) * 0.45}s`,
            width: i % 3 === 0 ? "6px" : "8px",
            height: i % 3 === 0 ? "10px" : "7px",
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null);
  const [historial, setHistorial] = useState<Ganador[] | null>(null);
  const [seleccion, setSeleccion] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [yaVotado, setYaVotado] = useState(false);
  const [votarAbierto, setVotarAbierto] = useState(false);
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

  async function cargarHistorial() {
    try {
      const res = await fetch("/api/historial", { cache: "no-store" });
      const json = await res.json();
      setHistorial(json.ganadores ?? []);
    } catch {
      setHistorial([]);
    }
  }

  useEffect(() => {
    cargar();
    cargarHistorial();
  }, []);

  // Sincroniza el flag local con el periodo real del servidor.
  useEffect(() => {
    if (!data || typeof window === "undefined") return;
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
        texto: `Voto registrado para ${nombrePorSlug(seleccion)}. Gracias por participar.`,
      });
    } catch {
      setMensaje({ tipo: "err", texto: "Error de red. Inténtalo de nuevo." });
    } finally {
      setEnviando(false);
    }
  }

  const maxVotos = data ? Math.max(1, ...data.resultados.map((r) => r.votos)) : 1;
  const top3 = data ? data.resultados.slice(0, 3) : [];
  const hayVotos = (data?.total ?? 0) > 0;

  function Podio({ r, pos }: { r: Resultado; pos: number }) {
    const esLider = pos === 1 && r.votos > 0;
    return (
      <article className={`pod${pos === 1 ? " pod--1" : ""}${esLider ? " pod--ganador" : ""}`}>
        {esLider && <Confetti />}
        <div className="pod__rank">{pos}</div>
        <div className="pod__avatar">{iniciales(nombrePorSlug(r.slug))}</div>
        <div className="pod__main">
          <div className="pod__name">
            {nombrePorSlug(r.slug)}
            {esLider && (
              <span className="premio-pill" aria-hidden="true">
                🧁 Pastelito
              </span>
            )}
          </div>
          <span className="pod__votes">
            <b>{r.votos}</b> {r.votos === 1 ? "voto" : "votos"}
          </span>
        </div>
      </article>
    );
  }

  return (
    <>
      <header className="hero">
        <div className="hero__inner">
          <div className="topbar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="/brand/logo-negative.svg" alt="Activum" />
            <span className="sede">Oficinas de Madrid</span>
          </div>

          <p className="eyebrow on-dark">Reconocimiento interno</p>
          <h1>
            Empleado del <em>mes</em>
          </h1>
          <p className="lead">
            Reconoce a quien marca la diferencia. Vota a tu compañera o compañero y
            consulta el ranking en directo.
          </p>

          <div className="premio">
            <span className="premio__emoji" aria-hidden="true">
              🧁
            </span>
            <span className="premio__texto">
              El empleado del mes gana un <strong>pastelito</strong>.
            </span>
          </div>
        </div>
      </header>

      <main className="container">
        {data && !data.persistente && (
          <div className="dev-note">
            Modo local: los votos no se guardan de forma permanente. Configura Upstash
            Redis en Vercel para activar el almacenamiento persistente.
          </div>
        )}

        {/* 1 · Top 3 */}
        <section className="section">
          <div className="section__head">
            <p className="eyebrow">Podio</p>
            <h2>Top 3{data ? ` · ${data.etiqueta}` : ""}</h2>
            {!hayVotos && (
              <span className="podium__empty">
                Aún no hay votos este mes. ¡Sé quien rompa el empate!
              </span>
            )}
          </div>

          {top3.length > 0 && (
            <div className="podium">
              <Podio r={top3[0]} pos={1} />
              <div className="podium__row">
                {top3[1] && <Podio r={top3[1]} pos={2} />}
                {top3[2] && <Podio r={top3[2]} pos={3} />}
              </div>
            </div>
          )}
        </section>

        {/* 2 · Bases del concurso */}
        <section className="section">
          <div className="section__head">
            <p className="eyebrow">Bases</p>
            <h2>Cómo funciona</h2>
          </div>

          <div className="bases">
            <ol className="bases__list">
              <li className="base">
                <span className="base__num">1</span>
                <span className="base__text">
                  El ganador del mes se lleva un <strong>pastelito</strong>. 🧁
                </span>
              </li>
              <li className="base">
                <span className="base__num">2</span>
                <span className="base__text">
                  Se cuelga un <strong>póster del ganador en la cocina</strong>.
                </span>
              </li>
              <li className="base">
                <span className="base__num">3</span>
                <span className="base__text">
                  El ganador se <strong>anuncia a finales de cada mes</strong>.
                </span>
              </li>
            </ol>
            <p className="bases__nota">
              <strong>Efecto retroactivo:</strong> el póster que se cuelga en la cocina
              corresponde al ganador del <strong>mes anterior</strong>.
            </p>
          </div>
        </section>

        {/* 3 · Votar (desplegable) */}
        <section className="section">
          <div className="vote">
            <button
              type="button"
              className="vote__toggle"
              aria-expanded={votarAbierto}
              onClick={() => setVotarAbierto((v) => !v)}
            >
              <span>{yaVotado ? "Ya has votado este mes" : "Emite tu voto"}</span>
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span className="estado">
                  {yaVotado ? "Ver opciones" : "un voto por persona"}
                </span>
                <span className="chev" aria-hidden="true">
                  ▾
                </span>
              </span>
            </button>

            {votarAbierto && (
              <div className="vote__body">
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
                      Gracias, ya has votado. Vuelve el día 1.
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4 · Clasificación completa */}
        <section className="section">
          <div className="section__head">
            <p className="eyebrow">Clasificación</p>
            <h2>Todos los votos</h2>
            <span className="muted">
              {data ? `${data.total} voto${data.total === 1 ? "" : "s"} en total` : "…"}
            </span>
          </div>

          <ol className="rank-list">
            {data?.resultados.map((r, i) => {
              const pct = Math.round((r.votos / maxVotos) * 100);
              return (
                <li key={r.slug} className={`rank-item${i === 0 && hayVotos ? " top1" : ""}`}>
                  <div className="rank-pos">{i + 1}</div>
                  <div className="rank-main">
                    <div className="rank-name">{nombrePorSlug(r.slug)}</div>
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

        {/* 5 · Salón de la fama (ganadores anteriores) */}
        <section className="section">
          <div className="section__head">
            <p className="eyebrow">Salón de la fama</p>
            <h2>Ganadores anteriores</h2>
          </div>

          {historial && historial.length > 0 ? (
            <ul className="ganadores">
              {historial.map((g) => (
                <li key={g.periodo} className="ganador">
                  <div className="ganador__avatar">{iniciales(g.nombre)}</div>
                  <div className="ganador__main">
                    <span className="ganador__mes">{g.etiqueta}</span>
                    <span className="ganador__nombre">{g.nombre}</span>
                  </div>
                  <div className="ganador__votos">
                    <span className="ganador__pastelito" aria-hidden="true">
                      🧁
                    </span>
                    <span>
                      {g.votos} voto{g.votos === 1 ? "" : "s"}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="ganadores__empty">
              Todavía no hay ganadores anteriores. El primer empleado del mes se
              proclamará el 1 de julio. 🧁
            </p>
          )}
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-foot" src="/brand/logo-positive.svg" alt="Activum" />
          <span>
            Reconocimiento interno · Oficinas de Madrid. El ranking se reinicia
            automáticamente el primer día de cada mes.
          </span>
        </div>
      </footer>
    </>
  );
}
