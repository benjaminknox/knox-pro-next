import './globals.scss'
import { jost } from "./fonts";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Benjamin Knox',
  description: 'A Blend of Professionalism and Authenticity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  )
}
