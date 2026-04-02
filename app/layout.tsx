import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'

import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f5f2ed',
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'White Peace Lodge & Event Garden | Serene Hospitality in Baatsona',
  description:
    'Experience comfort, warmth, and exceptional hospitality at White Peace Lodge & Event Garden. A welcoming haven in Baatsona offering cozy accommodations and beautiful event spaces for weddings, celebrations, and gatherings.',
  generator: 'v0.app',
  metadataBase: new URL('https://whitepeacelodge.com'),
  openGraph: {
    title: 'White Peace Lodge & Event Garden | Serene Hospitality in Baatsona',
    description:
      'Experience comfort, warmth, and exceptional hospitality at White Peace Lodge & Event Garden.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
