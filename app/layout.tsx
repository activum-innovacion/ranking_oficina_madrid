import type { Metadata } from "next";
import { Roboto, Roboto_Serif, Albert_Sans } from "next/font/google";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-isotipo",
  display: "swap",
});

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
    <html
      lang="es"
      className={`${robotoSerif.variable} ${roboto.variable} ${albertSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
