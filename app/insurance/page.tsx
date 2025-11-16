const providers: string[] = [
  'Manitoba Blue Cross',
  'Great-West Life / Canada Life',
  'Coughlin & Associates',
  'Green Shield',
  'Chamber of Commerce',
  'Maximum Benefits',
  'SSQ',
  'ClaimSecure',
  'Medavie Blue Cross',
  'National Blue Cross',
  'Johnson Group / Johnson Inc.',
  'Interim Federal Health Program',
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
        <section className="rounded-3xl bg-gray-50 p-6 shadow-sm sm:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
            Supported Providers
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-gray-800 sm:grid-cols-2 sm:gap-4">
            {providers.map((name) => (
              <div
                key={name}
                className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm"
              >
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#e63939]" />
                <span>{name}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-600">
            If your provider isn&apos;t listed, please contact us to confirm your coverage options.
          </p>
        </section>
      </div>
    </main>
  )
}
