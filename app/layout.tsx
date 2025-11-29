import type { Metadata } from 'next'
import { Great_Vibes } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'
import FloatingCTA from '@/components/popout/FloatingCTA'

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
})

export const metadata: Metadata = {
  title: 'Pro Motion Physiotherapy - St anns ,Winnipeg',
  description: 'Professional physiotherapy services in Winnipeg, Manitoba',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={greatVibes.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
