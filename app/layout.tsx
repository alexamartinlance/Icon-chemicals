import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import { Footer } from "@/components/footer"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "IconChemicals - Chemical Import Export & Dyes Supply",
  description:
    "Leading chemical import export business specializing in dyes and chemicals. Global supply chain solutions for industrial chemical needs.",
  generator: "v0.app",
  keywords:
    "chemical import, chemical export, dyes supply, industrial chemicals, chemical trading, global supply chain",
  authors: [{ name: "IconChemicals" }],
  creator: "IconChemicals",
  publisher: "IconChemicals",
  icons: {
    icon: [
      { url: "/iconchemicals-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/iconchemicals-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/iconchemicals-logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/iconchemicals-logo.png",
  },
  openGraph: {
    title: "IconChemicals - Chemical Import Export & Dyes Supply",
    description:
      "Leading chemical import export business specializing in dyes and chemicals. Global supply chain solutions for industrial chemical needs.",
    url: "https://iconchemicals.com",
    siteName: "IconChemicals",
    images: [
      {
        url: "/iconchemicals-logo.png",
        width: 1200,
        height: 630,
        alt: "IconChemicals Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IconChemicals - Chemical Import Export & Dyes Supply",
    description: "Leading chemical import export business specializing in dyes and chemicals.",
    images: ["/iconchemicals-logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <Footer />
      </body>
    </html>
  )
}
