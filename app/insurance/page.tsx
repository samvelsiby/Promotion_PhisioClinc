import Image from 'next/image'
import { Marquee } from '@/components/ui/marquee'

interface Provider {
  name: string
  logo?: string
  website?: string
}

const providers: Provider[] = [
  { name: 'Manitoba Blue Cross', logo: '/insurancecompaiens/mbc-logo-en.svg', website: 'https://www.mb.bluecross.ca/' },
  { name: 'Great-West Life / Canada Life', logo: '/insurancecompaiens/canada-life-e-tm.323032332d30382d33303a31303a3134.svg', website: 'https://www.canadalife.com/' },
  { name: 'Coughlin & Associates', logo: '/insurancecompaiens/couglin.png', website: 'https://www.coughlin.ca/' },
  { name: 'Green Shield', website: 'https://www.greenshield.ca/' },
  { name: 'Chamber of Commerce', logo: '/insurancecompaiens/15461-Chamber-Horizontal-RGB-1.png', website: 'https://www.chamberplan.ca/' },
  { name: 'Maximum Benefits', website: 'https://www.maximumbenefits.ca/' },
  { name: 'SSQ', logo: '/insurancecompaiens/regroupement-en.png', website: 'https://www.ssq.ca/' },
  { name: 'ClaimSecure', logo: '/insurancecompaiens/New-CS-logo-with-Slogan-EN.png', website: 'https://www.claimsecure.com/' },
  { name: 'Medavie Blue Cross', logo: '/insurancecompaiens/bluecross.svg', website: 'https://www.medaviebc.ca/' },
  { name: 'National Blue Cross' },
  { name: 'Johnson Group / Johnson Inc.', logo: '/insurancecompaiens/JG_short-white-59.png', website: 'https://www.johnson.ca/' },
  { name: 'Interim Federal Health Program' },
]

export default function InsurancePage() {
  return (
    <main className="min-h-screen bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63939] sm:text-sm">
            Insurance Coverage
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
            Insurance Providers We Direct Bill
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            To make your care as convenient as possible, we work with a wide range of insurance
            providers for direct billing whenever available.
          </p>
        </header>

        {/* Providers list */}
        <section className="rounded-3xl bg-gray-50/80 p-6 shadow-sm sm:p-8 lg:p-9">
          <div className="mb-4 flex flex-col gap-2 sm:mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 sm:text-sm">
              Supported Providers
            </h2>
            <p className="max-w-xl text-sm text-gray-600 sm:text-base">
              We work with the following extended health benefit plans for direct billing whenever possible.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {providers.map((provider) => (
              <div
                key={provider.name}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                {provider.logo ? (
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center">
                    <Image
                      src={provider.logo}
                      alt={provider.name}
                      width={96}
                      height={64}
                      className="h-auto w-auto max-h-16 max-w-[96px] object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100">
                    <span className="text-2xl font-bold text-gray-400">
                      {provider.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {provider.name}
                  </h3>
                  {provider.website && (
                    <a
                      href={provider.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#e63939] hover:underline font-medium"
                    >
                      Visit Website →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-gray-500 sm:text-sm">
            If your provider isn&apos;t listed here, please contact us. We&apos;re happy to help you confirm your
            coverage options and discuss billing.
          </p>
        </section>
      </div>
    </main>
  )
}
