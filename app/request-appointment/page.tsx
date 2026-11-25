import Link from 'next/link'
import { CalendarCheck, Clock, MapPin, Phone, PhoneCall, Star } from 'lucide-react'
import AppointmentRequestForm from '@/components/AppointmentRequestForm'
import JsonLd from '@/components/JsonLd'
import { COMPANY_CONTACT, GOOGLE_RATING, NAP_LINE, bookingHref } from '@/lib/constants'
import { pageMetadata } from '@/lib/metadata'
import { getBreadcrumbSchema } from '@/lib/schema'

export const metadata = pageMetadata(
  'Request a Physiotherapy Appointment in Winnipeg | Pro-Motion',
  'Request a physiotherapy appointment at Pro-Motion in St. Vital, Winnipeg. Leave your name and number and reception will call you back to confirm a time.',
  '/request-appointment',
)

const STEPS = [
  { icon: CalendarCheck, title: 'Send your request', text: 'It takes about a minute. Only your name and phone number are required.' },
  { icon: PhoneCall, title: 'We call you back', text: 'Reception calls during clinic hours to confirm a time that suits you.' },
  { icon: MapPin, title: 'Come in for your assessment', text: 'Free parking out front. Bring your insurance or claim details if you have them.' },
]

export default function RequestAppointmentPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-28 sm:pt-32">
      <JsonLd data={getBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Request an appointment', path: '/request-appointment' }])} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-16">
        {/* Form first in the DOM on mobile so it is above the fold; it sits on the right on desktop. */}
        <section aria-labelledby="request-heading" className="lg:order-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/60 sm:p-8">
            <h1 id="request-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Request an appointment</h1>
            <p className="mt-3 text-base leading-relaxed text-gray-600">Tell us how to reach you and we will call to confirm a time. No referral needed.</p>
            <div className="mt-6">
              <AppointmentRequestForm source="request-page" />
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-gray-600">
            In a hurry? <a href={`tel:${COMPANY_CONTACT.PHONE}`} className="font-semibold text-[#c8101e] underline underline-offset-4">Call {COMPANY_CONTACT.PHONE_DISPLAY}</a>
            {' '}or{' '}
            <a href={bookingHref('request-page')} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#c8101e] underline underline-offset-4">pick a time online</a>.
          </p>
        </section>

        <aside className="lg:order-1 lg:pt-4">
          <p className="text-sm font-semibold text-[#c8101e]">Pro-Motion Physiotherapy · St. Vital, Winnipeg</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">What happens next</h2>
          <ol className="mt-6 space-y-6">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#c8101e] shadow-sm ring-1 ring-gray-200">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{index + 1}. {step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href={COMPANY_CONTACT.REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Rated ${GOOGLE_RATING.value} out of 5 from ${GOOGLE_RATING.count} Google reviews. Read the reviews on Google.`}
            className="mt-8 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200 transition hover:ring-gray-300"
          >
            <span className="flex gap-0.5 text-amber-400" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-5 w-5 fill-current" />)}
            </span>
            <span className="text-sm text-gray-700"><strong className="text-gray-900">{GOOGLE_RATING.value}</strong> from {GOOGLE_RATING.count} Google reviews</span>
          </a>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#c8101e]" aria-hidden="true" /><span>Open 7 days: weekdays to 8:00 PM, Saturday to 4:00 PM, Sunday 10:00 AM to 4:00 PM</span></li>
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c8101e]" aria-hidden="true" /><span>{NAP_LINE}</span></li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#c8101e]" aria-hidden="true" /><span>Direct billing with many plans, and help with MPI and WCB claims. <Link href="/insurance" className="underline">Insurance details</Link></span></li>
          </ul>
          <p className="mt-6 text-sm text-gray-600">First time here? <Link href="/first-visit" className="font-semibold underline">See what to bring to your first visit</Link>.</p>
        </aside>
      </div>
    </main>
  )
}
