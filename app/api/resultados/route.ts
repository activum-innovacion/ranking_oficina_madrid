import { NextResponse } from "next/server";
import { obtenerResultados, etiquetaPeriodo } from "@/lib/votos";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await obtenerResultados();
  return NextResponse.json(
    { ...data, etiqueta: etiquetaPeriodo(data.periodo) },
    { headers: { "Cache-Control": "no-store" } }
  );
}
