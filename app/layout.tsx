import type { Metadata } from 'next'
import Script from 'next/script'
import { Great_Vibes, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'
import FloatingCTA from '@/components/popout/FloatingCTA'
import { SITE_URL } from '@/lib/constants'
import JsonLd from '@/components/JsonLd'
import { getLocalBusinessSchema, getWebsiteSchema } from '@/lib/schema'
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
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Physiotherapy in St. Vital, Winnipeg | Pro Motion Physiotherapy",
    template: "%s | Pro Motion Physiotherapy",
  },
  description:
    "Physiotherapy in St. Vital, Winnipeg for pain and injury recovery. Visit our St. Anne’s Road clinic. Direct billing, MPI and WCB support. Book online.",
  authors: [{ name: "Pro Motion Physiotherapy" }],
  creator: "Pro Motion Physiotherapy",
  publisher: "Pro Motion Physiotherapy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Pro Motion Physiotherapy",
    title:
      "Physiotherapy in St. Vital, Winnipeg | Pro Motion",
    description:
      "Personalized care for pain and injury recovery at our St. Anne’s Road clinic. Direct billing available. Book online.",
    images: [
      {
        url: "/Hero/hero-desktop.jpg",
        width: 1920,
        height: 1097,
        alt: "Hands-on physiotherapy treatment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Motion Physiotherapy | South Winnipeg",
    description:
      "Personalized care for pain and injury recovery at our St. Anne’s Road clinic. Direct billing available. Book online.",
    images: ["/Hero/hero-desktop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: SITE_URL,
  },
  verification: {},
};

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
          <JsonLd data={getLocalBusinessSchema()} />
          <JsonLd data={getWebsiteSchema()} />
          {children}
          <Footer />
        </div>
        <FloatingCTA />
      </body>
    </html>
  )
}
