import { NextResponse } from "next/server";
import { obtenerHistorial } from "@/lib/votos";

export const dynamic = "force-dynamic";

export async function GET() {
  const ganadores = await obtenerHistorial(12);
  return NextResponse.json(
    { ganadores },
    { headers: { "Cache-Control": "no-store" } }
  );
}
