import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import { COMPANY_CONTACT, NAP_LINE, SITE_URL, bookingHref } from '@/lib/constants'
import { pageMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema'
import {
  getApprovedTreatmentSlugs,
  getTreatmentPage,
  isTreatmentPageVisible,
  treatmentPages,
} from '../treatmentPages'

interface TreatmentPageProps {
  params: { slug: string }
}

// Only clinic-approved pages are built for production. Anything else is a 404 there.
export const dynamicParams = process.env.NODE_ENV !== 'production'

export function generateStaticParams() {
  return getApprovedTreatmentSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: TreatmentPageProps) {
  const page = getTreatmentPage(params.slug)
  if (!page || !isTreatmentPageVisible(page)) notFound()
  const metadata = pageMetadata(page.seoTitle, page.seoDescription, `/how-we-treat/${page.slug}`)
  // A draft shown in local development must never be indexed.
  return page.approved ? metadata : { ...metadata, robots: { index: false, follow: false } }
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1C24]" />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TreatmentDetailPage({ params }: TreatmentPageProps) {
  const page = getTreatmentPage(params.slug)
  if (!page || !isTreatmentPageVisible(page)) notFound()

  const path = `/how-we-treat/${page.slug}`
  const otherTreatments = treatmentPages.filter((item) => item.slug !== page.slug && isTreatmentPageVisible(item))
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}${path}#faq`,
    mainEntity: page.faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      {page.approved && (
        <>
          <JsonLd data={getServiceSchema({ name: page.name, description: page.seoDescription, path })} />
          <JsonLd data={getBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'How We Treat', path: '/how-we-treat' }, { name: page.name, path }])} />
          <JsonLd data={faqSchema} />
        </>
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!page.approved && (
          <div role="status" className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            <strong>Draft, not published.</strong> This page is visible in local development only. A registered
            physiotherapist at the clinic must review and approve it before it goes live. See
            docs/treatment-pages-compliance-2026-11.md.
          </div>
        )}

        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
          <Link href="/how-we-treat" className="text-[#c8101e] hover:underline">
            How We Treat
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{page.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            <header>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8101e] sm:text-sm">
                Physiotherapy treatment
              </p>
              <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">{page.h1}</h1>
              <p className="text-lg leading-relaxed text-gray-600">{page.intro}</p>
            </header>

            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">{section.heading}</h2>
                <div className="space-y-4">
                  {section.bullets && <Bullets items={section.bullets} />}
                  {section.paragraphs?.map((text) => (
                    <p key={text} className="leading-relaxed text-gray-700">
                      {text}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section id="faq">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Common questions</h2>
              <dl className="space-y-5">
                {page.faqs.map((item) => (
                  <div key={item.question} className="rounded-2xl border border-gray-200 bg-white p-5">
                    <dt className="font-semibold text-gray-900">{item.question}</dt>
                    <dd className="mt-2 leading-relaxed text-gray-700">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Visit us in Meadowood, St. Vital</h2>
              <p className="leading-relaxed text-gray-700">
                Pro-Motion Physiotherapy is at {NAP_LINE}. Call {COMPANY_CONTACT.PHONE_DISPLAY} to ask which
                physiotherapist provides this treatment, or read about the{' '}
                <Link className="underline" href="/team">
                  physiotherapy team
                </Link>
                .{' '}
                <Link className="underline" href="/first-visit#location">
                  Plan your visit
                </Link>{' '}
                or review{' '}
                <Link className="underline" href="/first-visit#cost-and-coverage">
                  cost and coverage questions
                </Link>
                .
              </p>
              {page.rostered && (
                <p className="mt-4 text-gray-700">
                  <a className="underline" href="https://manitobaphysio.com/for-the-public/verify-a-physiotherapist/" rel="noopener noreferrer" target="_blank">
                    Verify a physiotherapist with the College of Physiotherapists of Manitoba
                  </a>
                  .
                </p>
              )}
              <p className="mt-4 text-sm text-gray-600">
                This page is general information, not personal medical advice. Your physiotherapist will assess you
                and discuss which treatment options are appropriate.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">Sources</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                {page.sources.map((source) => (
                  <li key={source.url}>
                    <a className="underline" href={source.url} rel="noopener noreferrer" target="_blank">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Book a physiotherapy assessment</h2>
              <p className="mb-6 text-gray-600">
                An assessment comes first. Your physiotherapist will discuss whether {page.name.toLowerCase()} or
                another option suits you.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href={bookingHref('treatment-cta')}
                  data-rt-goal="book-treatment-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8101e] px-8 py-4 text-base font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#a50d18]"
                >
                  <Calendar className="h-5 w-5" />
                  Book Now
                </Link>
                <a
                  href={`tel:${COMPANY_CONTACT.PHONE}`}
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-colors duration-300 hover:border-[#c8101e]"
                >
                  Call {COMPANY_CONTACT.PHONE_DISPLAY}
                </a>
              </div>
            </section>
          </div>

          <aside className="h-fit space-y-6 lg:sticky lg:top-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Related care</h2>
              <nav className="space-y-2">
                {page.related
                  .filter((link) => {
                    // Do not link to a sibling treatment page that is still a draft in production.
                    const sibling = treatmentPages.find((item) => `/how-we-treat/${item.slug}` === link.href)
                    return !sibling || isTreatmentPageVisible(sibling)
                  })
                  .map((link) => (
                    <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100">
                      {link.label}
                    </Link>
                  ))}
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold text-gray-900">More treatments</h2>
              <nav className="space-y-2">
                {otherTreatments.map((item) => (
                  <Link key={item.slug} href={`/how-we-treat/${item.slug}`} className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100">
                    {item.name}
                  </Link>
                ))}
                <Link href="/how-we-treat" className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#c8101e] transition-colors hover:bg-gray-100">
                  All treatments
                </Link>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
