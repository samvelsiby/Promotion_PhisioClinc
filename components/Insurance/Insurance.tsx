'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import RevealOnScroll from '@/components/RevealOnScroll'

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

export default function Insurance() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63939] sm:text-sm">
              Insurance Coverage
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
              Insurance Providers We Direct Bill
            </h2>
            <p className="mt-4 text-sm text-gray-600 sm:text-base">
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

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {providers.slice(0, 9).map((provider) => (
                <div
                  key={provider.name}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:border-[#e63939]/40 hover:shadow-md"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#e63939] flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-900 flex-1">
                    {provider.name}
                  </span>
                </div>
              ))}
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


