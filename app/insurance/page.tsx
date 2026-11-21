import Link from 'next/link'
import Image from 'next/image'
import JsonLd from '@/components/JsonLd'
import { COMPANY_CONTACT, SITE_URL } from '@/lib/constants'

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

// Each answer is general information. Plans differ, so nothing here states a coverage amount.
const checks = [
  { term: 'Annual maximum', detail: 'the total your plan pays for physiotherapy in a benefit year, and how much of it remains.' },
  { term: 'Per-visit limit', detail: 'whether the plan pays a percentage of each visit or a fixed amount.' },
  { term: 'Benefit year', detail: 'the dates your plan year starts and ends. Plans set their own.' },
  { term: 'Referral', detail: 'whether your plan asks for a doctor\u2019s referral before it reimburses physiotherapy.' },
  { term: 'A second plan', detail: 'whether you are also covered under a spouse\u2019s or student plan.' },
  { term: 'Health spending account', detail: 'whether you have one, and what it can be used for.' },
]

const faqs = [
  {
    question: 'Does direct billing mean my visit is fully covered?',
    answer:
      'No. Direct billing means the clinic sends an eligible claim to your insurer for you. Your plan decides how much it pays. You pay any amount the insurer does not cover, so ask reception about current fees before your visit.',
  },
  {
    question: 'Do I need a doctor\u2019s referral to use my benefits?',
    answer:
      'You can book physiotherapy in Manitoba without a referral. Some plans ask for one before they reimburse visits, so check your plan booklet or ask your insurer.',
  },
  {
    question: 'I am covered by my own plan and my spouse\u2019s plan. Which one do I use?',
    answer:
      'Manitoba Blue Cross explains that you submit your own claim to your own plan first, then send the statement it returns to your spouse\u2019s plan for the unpaid balance. For children covered by both parents, the plan of the parent whose birthday falls earlier in the calendar year goes first. A health spending account is used last. Other insurers may word this differently, so confirm with yours.',
  },
  {
    question: 'When does my physiotherapy coverage renew?',
    answer:
      'That depends on your plan. Each plan sets its own benefit year. Your plan booklet or your insurer\u2019s member site shows the dates and how much of your physiotherapy allowance remains.',
  },
  {
    question: 'Can I claim physiotherapy on my income tax return?',
    answer:
      'The Canada Revenue Agency lists physiotherapists as authorized medical practitioners in Manitoba for the medical expense tax credit. You can claim only the part of an expense that was not reimbursed. Keep your receipts in case the agency asks for them.',
  },
  {
    question: 'What if my insurer is not listed?',
    answer:
      'Contact the clinic. You can pay for the visit and submit the receipt to your insurer yourself, and reception can tell you whether direct billing is possible for your plan.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/insurance#faq`,
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const h2 = 'text-2xl font-semibold text-gray-900'
const body = 'mt-4 text-base leading-relaxed text-gray-600'
const link = 'font-semibold text-[#c8101e] underline underline-offset-4'

export default function InsurancePage() {
  return (
    <main className="min-h-screen bg-white py-16 sm:py-20 lg:py-24">
      <JsonLd data={faqSchema} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8101e] sm:text-sm">
            Insurance and direct billing
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
            Physiotherapy Insurance and Direct Billing in Winnipeg
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            Pro-Motion Physiotherapy in St. Vital direct bills the insurers listed below where your plan allows it.
            This page explains how direct billing works, what to check in your plan, and how MPI and WCB claims are
            handled.
          </p>
        </header>

        <section className="mb-12">
          <h2 className={h2}>How direct billing works</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-base leading-relaxed text-gray-600">
            <li>Bring your benefit card or plan and member numbers to your appointment.</li>
            <li>After your visit, the clinic submits the eligible claim to your insurer.</li>
            <li>Your insurer decides what it pays under your plan. You pay any remaining amount.</li>
          </ol>
          <p className={body}>
            Direct billing does not guarantee full payment. Ask reception about current fees and how payment works if a
            claim cannot be processed. See{' '}
            <Link href="/first-visit" className={link}>
              what to expect at your first visit
            </Link>{' '}
            or read the{' '}
            <Link href="/blogs/direct-billing-physiotherapy-winnipeg" className={link}>
              direct billing guide
            </Link>
            .
          </p>
        </section>

        <section className="mb-12">
          <h2 className={h2}>What to check in your plan</h2>
          <p className={body}>
            Your plan booklet or your insurer&rsquo;s member site answers these. Checking before you book avoids
            surprises.
          </p>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            {checks.map((item) => (
              <div key={item.term} className="rounded-xl border border-gray-200 p-5">
                <dt className="font-semibold text-gray-900">{item.term}</dt>
                <dd className="mt-1 text-base leading-relaxed text-gray-600">
                  {item.detail.charAt(0).toUpperCase() + item.detail.slice(1)}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Providers list */}
        <section aria-labelledby="providers-heading" className="rounded-3xl bg-gray-50/80 p-6 shadow-sm sm:p-8 lg:p-9">
          <div className="mb-4 flex flex-col gap-2 sm:mb-6">
            <h2 id="providers-heading" className="text-2xl font-semibold text-gray-900">
              Insurers we direct bill
            </h2>
            <p className="max-w-xl text-sm text-gray-600 sm:text-base">
              Direct billing is available with these insurers where your plan allows it. Being listed here does not mean your plan covers physiotherapy.
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

        <section className="mt-12">
          <h2 className={h2}>Car accident and work injury claims</h2>
          <p className={body}>
            Injuries from a collision are handled through Manitoba Public Insurance, and injuries at work through the
            Workers Compensation Board of Manitoba. Each decides what it covers. Open your claim with MPI or the WCB
            first, and bring your claim number if you have one.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-gray-600">
            <li>
              <Link href="/services/motor-vehicle-accident-recovery" className={link}>
                Physiotherapy after a car accident (MPI)
              </Link>
            </li>
            <li>
              <Link href="/services/work-injuries" className={link}>
                Work injury physiotherapy (WCB)
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className={h2}>Manitoba Health and surgery rehabilitation</h2>
          <p className={body}>
            Routine visits to a private clinic are generally paid privately or through benefits, not by Manitoba Health.
            Manitoba publishes an{' '}
            <a
              href="https://www.gov.mb.ca/health/dsrecovery/docs/post-op-surgery-faq.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              eligible elective hip and knee replacement physiotherapy program
            </a>
            . Confirm current eligibility and clinic participation before arranging care. Read more in{' '}
            <Link href="/blogs/is-physiotherapy-covered-by-manitoba-health" className={link}>
              Is physiotherapy covered by Manitoba Health?
            </Link>
          </p>
        </section>

        <section id="faq" className="mt-12">
          <h2 className={h2}>Insurance questions</h2>
          <dl className="mt-5 space-y-4">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-xl border border-gray-200 p-5">
                <dt className="font-semibold text-gray-900">{item.question}</dt>
                <dd className="mt-2 text-base leading-relaxed text-gray-600">{item.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm leading-relaxed text-gray-600">
            Sources:{' '}
            <a
              href="https://www2.mb.bluecross.ca/customer-service/navigate-your-benefits/how-to-coordinate-benefits-between-your-plan-and-your-spouses-plan"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Manitoba Blue Cross, coordinating benefits
            </a>
            ;{' '}
            <a
              href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-33099-33199-eligible-medical-expenses-you-claim-on-your-tax-return/authorized-medical-practitioners-purposes-medical-expense-tax-credit.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Canada Revenue Agency, authorized medical practitioners
            </a>
            . This page is general information, not advice about your plan or your taxes. Call{' '}
            {COMPANY_CONTACT.PHONE_DISPLAY} with questions about billing at the clinic.
          </p>
        </section>
      </div>
    </main>
  )
}
