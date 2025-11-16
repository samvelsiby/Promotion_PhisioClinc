interface Provider {
  name: string
  website?: string
}

const providers: Provider[] = [
  { name: 'Manitoba Blue Cross', website: 'https://www.mb.bluecross.ca/' },
  { name: 'Great-West Life / Canada Life', website: 'https://www.canadalife.com/' },
  { name: 'Coughlin & Associates', website: 'https://www.coughlin.ca/' },
  { name: 'Green Shield', website: 'https://www.greenshield.ca/' },
  { name: 'Chamber of Commerce', website: 'https://www.chamberplan.ca/' },
  { name: 'Maximum Benefits', website: 'https://www.maximumbenefits.ca/' },
  { name: 'SSQ', website: 'https://www.ssq.ca/' },
  { name: 'ClaimSecure', website: 'https://www.claimsecure.com/' },
  { name: 'Medavie Blue Cross', website: 'https://www.medaviebc.ca/' },
  { name: 'National Blue Cross' },
  { name: 'Johnson Group / Johnson Inc.', website: 'https://www.johnson.ca/' },
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

          <ul className="grid gap-3 text-sm text-gray-800 sm:grid-cols-2">
            {providers.map((provider) => (
              <li
                key={provider.name}
                className="flex items-center justify-between rounded-full border border-gray-200 bg-white px-4 py-2.5 shadow-sm transition-colors duration-200 hover:border-[#e63939]/40"
              >
                <span className="truncate pr-2 text-[0.95rem] font-medium text-gray-900">
                  {provider.name}
                </span>
                {provider.website && (
                  <a
                    href={provider.website}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide text-[#e63939] underline-offset-4 hover:underline"
                  >
                    Website
                  </a>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-gray-500 sm:text-sm">
            If your provider isn&apos;t listed here, please contact us. We&apos;re happy to help you confirm your
            coverage options and discuss billing.
          </p>
        </section>
      </div>
    </main>
  )
}
