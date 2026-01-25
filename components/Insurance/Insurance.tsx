'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import RevealOnScroll from '@/components/RevealOnScroll'
import { Marquee } from '@/components/ui/marquee'

interface Provider {
  name: string
  logo: string
  website?: string
}

const providers: Provider[] = [
  { name: 'Manitoba Blue Cross', logo: '/insurancecompaiens/mbc-logo-en.svg', website: 'https://www.mb.bluecross.ca/' },
  { name: 'Canada Life', logo: '/insurancecompaiens/canada-life-e-tm.323032332d30382d33303a31303a3134.svg', website: 'https://www.canadalife.com/' },
  { name: 'Coughlin & Associates', logo: '/insurancecompaiens/couglin.png', website: 'https://www.coughlin.ca/' },
  { name: 'Blue Cross', logo: '/insurancecompaiens/bluecross.svg' },
  { name: 'Chamber of Commerce', logo: '/insurancecompaiens/15461-Chamber-Horizontal-RGB-1.png', website: 'https://www.chamberplan.ca/' },
  { name: 'ClaimSecure', logo: '/insurancecompaiens/New-CS-logo-with-Slogan-EN.png', website: 'https://www.claimsecure.com/' },
  { name: 'Johnson Group', logo: '/insurancecompaiens/JG_short-white-59.png', website: 'https://www.johnson.ca/' },
  { name: 'SSQ', logo: '/insurancecompaiens/regroupement-en.png', website: 'https://www.ssq.ca/' },
]

export default function Insurance() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
            <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#e63939]">
              Insurance Coverage
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Insurance Providers We Direct Bill
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 leading-relaxed">
              To make your care as convenient as possible, we work with a wide range of insurance
              providers for direct billing whenever available.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="rounded-3xl bg-gray-50/80 p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 sm:text-sm mb-2">
                Supported Providers
              </h3>
              <p className="max-w-xl text-sm text-gray-600 sm:text-base">
                We work with the following extended health benefit plans for direct billing whenever possible.
              </p>
            </div>

            <div className="py-8">
              <Marquee pauseOnHover speed={40} gradient gradientColor="white" gradientWidth={100}>
                {providers.map((provider) => (
                  <div
                    key={provider.name}
                    className="mx-8 flex h-16 w-32 items-center justify-center"
                  >
                    <Image
                      src={provider.logo}
                      alt={provider.name}
                      width={128}
                      height={64}
                      className="h-auto w-auto max-h-16 max-w-[128px] object-contain grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100"
                    />
                  </div>
                ))}
              </Marquee>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 sm:text-sm text-center sm:text-left">
                If your provider isn&apos;t listed here, please contact us. We&apos;re happy to help you confirm your
                coverage options and discuss billing.
              </p>
              <Link
                href="/insurance"
                className="inline-flex items-center gap-2 rounded-full bg-[#e63939] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c62828] whitespace-nowrap"
              >
                View All Providers
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}


