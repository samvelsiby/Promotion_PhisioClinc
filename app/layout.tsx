import type { Metadata } from 'next'
import { Great_Vibes } from 'next/font/google'
import './globals.css'

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
})

export const metadata: Metadata = {
  title: 'Promotion Physiotherapy - Winnipeg',
  description: 'Professional physiotherapy services in Winnipeg, Manitoba',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={greatVibes.variable}>
      <body>{children}</body>
    </html>
  )
}
