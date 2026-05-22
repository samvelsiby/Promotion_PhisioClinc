import type { Metadata } from 'next'
import Script from 'next/script'
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
    default: 'Pro Motion Physiotherapy | St. Anne\'s Road & South Winnipeg Physiotherapist',
    template: '%s | Pro Motion Physiotherapy',
  },
  description: 'Registered physiotherapy clinic in South Winnipeg (St. Vital). Professional treatment for back pain, sports injuries, MVA/MPI, WCB claims. Direct billing available. Professional physiotherapy clinic serving all of Winnipeg. Book today!',
  keywords: [
    'physiotherapy Winnipeg',
    'physiotherapist South Winnipeg',
    'Winnipeg South physiotherapy',
    'physiotherapist St. Vital',
    'St. Anne\'s Road physiotherapy clinic',
    'Pembina Highway physiotherapist',
    'Pembina physiotherapy Winnipeg',
    'South Main Winnipeg physio',
    'Winnipeg back pain treatment',
    'sports injury clinic Winnipeg',
    'MVA physiotherapy Manitoba',
    'MPI claims physiotherapy Winnipeg',
    'WCB physiotherapy Winnipeg',
    'direct billing physiotherapy',
    'registered physiotherapist Winnipeg',
    'chronic pain treatment Winnipeg',
    'post-surgical rehabilitation Winnipeg',
    'work injury physiotherapy Manitoba',
    'Winnipeg physiotherapy clinic'
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
    title: 'Pro Motion Physiotherapy | South Winnipeg & St. Anne\'s Road Physiotherapy Region',
    description: 'Registered physiotherapy in South Winnipeg located on St. Anne\'s Road. Professional care serving St. Vital, Pembina, South Main, and all Winnipeg residents. Direct billing available.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Pro Motion Physiotherapy - Winnipeg Physiotherapist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Motion Physiotherapy | South Winnipeg',
    description: 'Professional physiotherapy on St. Anne\'s Road in South Winnipeg. Serving St. Vital, Pembina, South Main area with comprehensive care and direct billing.',
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
        <Script
          src="https://datafa.st/js/script.js"
          data-website-id="dfid_QoyPW2C1pzniPcSl3pYpc"
          data-domain="www.promotionphysiotherapy.ca"
          strategy="afterInteractive"
        />
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
