'use client'

import Image from 'next/image'
import { Marquee } from '@/components/ui/marquee'

interface Provider {
  name: string
  logo: string
}

const providers: Provider[] = [
  { name: 'Manitoba Blue Cross', logo: '/insurancecompaiens/mbc-logo-en.svg' },
  { name: 'Canada Life', logo: '/insurancecompaiens/canada-life-e-tm.323032332d30382d33303a31303a3134.svg' },
  { name: 'Coughlin & Associates', logo: '/insurancecompaiens/couglin.png' },
  { name: 'Blue Cross', logo: '/insurancecompaiens/bluecross.svg' },
  { name: 'Chamber of Commerce', logo: '/insurancecompaiens/15461-Chamber-Horizontal-RGB-1.png' },
  { name: 'ClaimSecure', logo: '/insurancecompaiens/New-CS-logo-with-Slogan-EN.png' },
  { name: 'Johnson Group', logo: '/insurancecompaiens/JG_short-white-59.png' },
  { name: 'SSQ', logo: '/insurancecompaiens/regroupement-en.png' },
]

export default function InsuranceMarquee() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-700 sm:text-sm">
            We Bill Directly With These Insurance Providers
          </p>
        </div>

        <Marquee pauseOnHover speed={40} gradient gradientColor="rgb(239, 246, 255)" gradientWidth={100}>
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
                className="h-auto w-auto max-h-16 max-w-[128px] object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
