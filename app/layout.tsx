import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackaITLAC - El Hackathon Oficial del ITLAC",
  description: "Únete a 12 horas de pura innovación, tecnología y creatividad. Resuelve desafíos del mundo real, colabora con mentes brillantes y gana premios increíbles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}