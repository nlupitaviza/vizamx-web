import "./globals.css"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://vizamx-web.vercel.app"),
  title: {
    default: "VIZAMX | Innovación visual y desarrollo",
    template: "%s | VIZAMX",
  },
  description:
    "VIZAMX es una plataforma de innovación visual, estrategia y desarrollo de proyectos digitales.",
  openGraph: {
    title: "VIZAMX",
    description:
      "Innovación visual, estrategia y desarrollo de proyectos digitales.",
    url: "https://vizamx-web.vercel.app",
    siteName: "VIZAMX",
    locale: "es_MX",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}