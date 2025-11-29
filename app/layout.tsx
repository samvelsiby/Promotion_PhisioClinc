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
  metadataBase: new URL('https://promotionphysiotherapy.com'),
  title: {
    default: 'Pro Motion Physiotherapy | Registered Physiotherapy Clinic in Winnipeg, MB',
    template: '%s | Pro Motion Physiotherapy',
  },
  description: 'Professional physiotherapy services in Winnipeg, Manitoba. Expert treatment for back pain, sports injuries, work injuries, MVA/MPI claims, and chronic pain. Book your appointment today.',
  keywords: [
    'physiotherapy Winnipeg',
    'physiotherapist Winnipeg',
    'physical therapy Winnipeg',
    'back pain treatment Winnipeg',
    'sports injury rehabilitation Winnipeg',
    'work injury treatment Winnipeg',
    'MPI claims Winnipeg',
    'WCB physiotherapy Winnipeg',
    'chronic pain management Winnipeg',
    'post-surgical rehabilitation Winnipeg',
    'St. Anne\'s Road physiotherapy',
    'registered physiotherapist Manitoba',
  ],
  authors: [{ name: 'Pro Motion Physiotherapy' }],
  creator: 'Pro Motion Physiotherapy',
  publisher: 'Pro Motion Physiotherapy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://promotionphysiotherapy.com',
    siteName: 'Pro Motion Physiotherapy',
    title: 'Pro Motion Physiotherapy | Registered Physiotherapy Clinic in Winnipeg, MB',
    description: 'Professional physiotherapy services in Winnipeg, Manitoba. Expert treatment for back pain, sports injuries, work injuries, MVA/MPI claims, and chronic pain.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Pro Motion Physiotherapy Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Motion Physiotherapy | Registered Physiotherapy Clinic in Winnipeg, MB',
    description: 'Professional physiotherapy services in Winnipeg, Manitoba. Expert treatment for back pain, sports injuries, work injuries, MVA/MPI claims, and chronic pain.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  alternates: {
    canonical: 'https://promotionphysiotherapy.com',
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
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
