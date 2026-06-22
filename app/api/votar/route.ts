import { NextRequest, NextResponse } from "next/server";
import { registrarVoto, obtenerResultados, periodoActual, etiquetaPeriodo } from "@/lib/votos";
import { SLUGS } from "@/lib/empleados";

export const dynamic = "force-dynamic";

const COOKIE = "activum_voto";

export async function POST(req: NextRequest) {
  let slug = "";
  try {
    const body = await req.json();
    slug = String(body?.slug ?? "");
  } catch {
    return NextResponse.json({ error: "Petición no válida" }, { status: 400 });
  }

  if (!SLUGS.has(slug)) {
    return NextResponse.json({ error: "Empleado no válido" }, { status: 400 });
  }

  const periodo = periodoActual();

  // Control simple de un voto por navegador y por mes mediante cookie.
  const cookieActual = req.cookies.get(COOKIE)?.value;
  if (cookieActual === periodo) {
    return NextResponse.json(
      { error: "Ya has votado este mes. ¡Gracias!" },
      { status: 409 }
    );
  }

  await registrarVoto(slug);
  const data = await obtenerResultados();

  const res = NextResponse.json({
    ok: true,
    ...data,
    etiqueta: etiquetaPeriodo(data.periodo),
  });

  // La cookie expira al final de este mes (aprox), así puede volver a votar el día 1.
  res.cookies.set(COOKIE, periodo, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 35,
  });
  return res;
}
