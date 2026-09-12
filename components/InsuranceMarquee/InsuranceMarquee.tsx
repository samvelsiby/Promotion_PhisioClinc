import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CreditCard } from 'lucide-react'

const providers = [
  { name: 'Medavie Blue Cross', logo: '/insurancecompaiens/mbc-logo-en.svg' },
  { name: 'Canada Life', logo: '/insurancecompaiens/canada-life-e-tm.323032332d30382d33303a31303a3134.svg' },
  { name: 'Coughlin & Associates', logo: '/insurancecompaiens/couglin.png' },
  { name: 'ClaimSecure', logo: '/insurancecompaiens/New-CS-logo-with-Slogan-EN.png' },
]

export default function InsuranceMarquee() {
  return (
    <section id="direct-billing" aria-labelledby="billing-heading" className="scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="home-card grid overflow-hidden lg:grid-cols-2">
          <div className="p-6 sm:p-8 lg:p-10">
            <CreditCard className="mb-5 h-7 w-7 text-[#c8101e]" aria-hidden="true" />
            <h2 id="billing-heading" className="font-bold text-gray-900">Focus on recovery.<br />We’ll help with the billing.</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-600">We offer direct billing to participating insurance providers, with support for MPI and WCB claims. Bring your insurance details and we’ll help you understand the next steps.</p>
            <Link href="/insurance" className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#c8101e] px-5 py-3 font-semibold text-white hover:bg-[#a50d19]">Check insurance & direct billing <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>
          </div>
          <div className="border-t border-gray-200 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <p className="mb-5 text-sm font-semibold text-gray-900">Some of the providers we bill directly</p>
            <ul className="grid grid-cols-2 gap-3">
              {providers.map(provider => <li key={provider.name} className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white p-3">
                <div className="relative h-10 w-full"><Image src={provider.logo} alt="" fill sizes="(max-width: 639px) 120px, 180px" className="object-contain" /></div>
                <span className="text-center text-xs leading-relaxed text-gray-600">{provider.name}</span>
              </li>)}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">Coverage and direct-billing eligibility depend on your plan. You may be responsible for amounts your insurer does not cover.</p>
            <Link href="/insurance" className="mt-3 inline-flex min-h-10 items-center font-semibold text-sm text-[#c8101e] underline underline-offset-4">View provider and claims information</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
