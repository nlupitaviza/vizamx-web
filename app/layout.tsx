import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}