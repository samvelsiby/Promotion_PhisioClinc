import type { Metadata } from 'next'
import { Great_Vibes, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'
import FloatingCTA from '@/components/popout/FloatingCTA'
import PerspectiveGrid from '@/components/Background/PerspectiveGrid'

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://promotionphysiotherapy.ca'),
  title: {
    default: 'Pro Motion Physiotherapy | St. Vital Winnipeg Physiotherapist | St. Anne\'s Road',
    template: '%s | Pro Motion Physiotherapy',
  },
  description: 'Registered physiotherapy clinic on St. Anne\'s Road in St. Vital, Winnipeg. Serving St. Boniface, Windsor Park, Fort Richmond & University of Manitoba area. Professional treatment for back pain, sports injuries, MVA/MPI, WCB claims. Direct billing. Book today!',
  keywords: [
    'physiotherapy Winnipeg',
    'physiotherapist St. Vital',
    'St. Anne\'s Road physiotherapy',
    'St. Boniface physiotherapist',
    'Windsor Park physiotherapy',
    'Fort Richmond physio',
    'University of Manitoba physiotherapy',
    'Southdale physiotherapist',
    'Winnipeg back pain treatment',
    'sports injury clinic Winnipeg',
    'MVA physiotherapy Manitoba',
    'MPI claims physiotherapy',
    'WCB physiotherapy Winnipeg',
    'direct billing physiotherapy',
    'registered physiotherapist Winnipeg',
    'chronic pain treatment Winnipeg',
    'post-surgical rehabilitation',
    'work injury physiotherapy',
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
    url: 'https://promotionphysiotherapy.ca',
    siteName: 'Pro Motion Physiotherapy',
    title: 'Pro Motion Physiotherapy | St. Vital Winnipeg Physiotherapist',
    description: 'Registered physiotherapy on St. Anne\'s Road, Winnipeg. Serving St. Vital, St. Boniface, Windsor Park. Professional care for injuries, pain relief & rehabilitation. Direct billing available.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Pro Motion Physiotherapy - St. Vital Winnipeg Physiotherapist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Motion Physiotherapy | St. Vital Winnipeg',
    description: 'Professional physiotherapy on St. Anne\'s Road. Serving St. Vital, St. Boniface, Windsor Park & surrounding Winnipeg areas. Direct billing available.',
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
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://promotionphysiotherapy.ca',
  },
  verification: {},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${outfit.variable} font-sans`}>
      <body>
        <PerspectiveGrid />
        {/* White background for navbar area */}
        <div className="fixed top-0 left-0 right-0 h-32 bg-white z-0"></div>
        <div className="relative z-10">
          <Navbar />
          {/* WebSite Schema for Sitelinks */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Pro Motion Physiotherapy',
                url: 'https://promotionphysiotherapy.ca',
                alternateName: ['Pro Motion', 'Pro Motion Physio'],
                potentialAction: [
                  {
                    '@type': 'ReserveAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: 'https://pmphysio.juvonno.com/portal/publicbook.php',
                      actionPlatform: [
                        'http://schema.org/DesktopWebPlatform',
                        'http://schema.org/MobileWebPlatform'
                      ]
                    },
                    name: 'Book Now'
                  }
                ]
              }),
            }}
          />
          {children}
          <Footer />
        </div>
        <FloatingCTA />
      </body>
    </html>
  )
}
