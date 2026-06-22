import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Activum · Empleado del Mes — Madrid",
  description:
    "Vota al empleado del mes de las oficinas de Activum en Madrid. El ranking se reinicia el primer día de cada mes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
