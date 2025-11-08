import "./globals.css"

import type { Metadata } from "next"
import localFont from "next/font/local"
import siteMetadata from './metadata.json'

const geistSans = localFont({
  src: [
    {
      path: '../public/fonts/41d16a1ca7334fead72ba0ee36582ccb.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = localFont({
  src: [
    {
      path: '../public/fonts/41d16a1ca7334fead72ba0ee36582ccb.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = siteMetadata['/']

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        >
          {children}
        </body>
    </html>
  )
}
