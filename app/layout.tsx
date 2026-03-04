import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const playfairDisplay = Playfair_Display({
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
  themeColor: '#faf8f3',
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'White Peace Hotel | Luxury 4-Star Hotel in Accra',
  description:
    'Experience luxury, serenity, and convenience at White Peace Hotel. A 4-star hotel in the heart of Accra offering fine dining, spa, conference facilities, and exceptional hospitality.',
  generator: 'v0.app',
  metadataBase: new URL('https://whitepeacehotel.com'),
  openGraph: {
    title: 'White Peace Hotel | Luxury 4-Star Hotel in Accra',
    description:
      'Experience luxury, serenity, and convenience at White Peace Hotel.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
