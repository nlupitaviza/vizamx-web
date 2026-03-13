import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIZAMX",
  description: "Marca estratégica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}