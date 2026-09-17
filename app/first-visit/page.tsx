import Link from 'next/link'
import { COMPANY_CONTACT, NAP_LINE } from '@/lib/constants'
import { pageMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'
import { getBreadcrumbSchema } from '@/lib/schema'

export const metadata = pageMetadata('Your First Physiotherapy Visit in Winnipeg | Pro Motion', 'Prepare for your first physiotherapy appointment in Meadowood, St. Vital: what to bring, insurance questions, location and online booking at Pro Motion.', '/first-visit')

export default function FirstVisitPage() {
  return <main className="min-h-screen bg-white py-24 sm:py-28">
    <JsonLd data={getBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Your first visit', path: '/first-visit' }])} />
    <div className="mx-auto max-w-4xl px-4 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm"><Link href="/" className="underline">Home</Link> / Your first visit</nav>
      <p className="text-sm font-semibold text-[#c8101e]">Pro Motion · St. Vital, Winnipeg</p>
      <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">Your first physiotherapy visit.</h1>
      <p className="mt-6 text-lg leading-relaxed text-gray-600">Know what to bring, what to ask and how to find us. If you are unsure which appointment to select, call our team before booking.</p>
      <div className="my-8 flex flex-wrap gap-4">
        <a href={COMPANY_CONTACT.BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-full bg-[#c8101e] px-6 py-3 font-semibold text-white">Book an assessment</a>
        <a href={`tel:${COMPANY_CONTACT.PHONE}`} className="inline-flex min-h-12 items-center px-3 py-3 font-semibold underline">Call {COMPANY_CONTACT.PHONE_DISPLAY}</a>
      </div>
      <div className="prose prose-lg max-w-none">
        <h2>Before you book</h2>
        <p>You can contact us without a doctor’s referral. Some insurance plans require a referral for reimbursement, so confirm your own plan’s terms. Tell reception if your visit involves a workplace injury, motor vehicle collision or rehabilitation after surgery.</p>
        <p>Ask about the current assessment fee, appointment length and any accessibility or communication needs. Check available appointments in the booking portal; opening hours do not guarantee a particular time slot.</p>
        <h2>What to bring</h2>
        <ul>
          <li>Your insurance information if you plan to use extended health benefits.</li>
          <li>Your MPI or WCB claim number and injury date, if applicable and available.</li>
          <li>Any referral, discharge instructions or relevant clinical documents you already have.</li>
          <li>Comfortable clothing that allows the area being assessed to move; ask reception if unsure.</li>
          <li>A short list of your questions and the activities you want help returning to.</li>
        </ul>
        <h2>What the assessment involves</h2>
        <p>Your physiotherapist will discuss your concerns, health information and goals, then assess the relevant movement and function. Ask questions about the findings, proposed options and next steps. Your plan depends on the assessment; there is no single visit count that suits everyone.</p>
        <p>Our appointment information advises arriving 15–20 minutes early for forms. Initial appointments are generally 60–75 minutes; confirm the duration of your booked appointment with reception.</p>
        <p>Use our <Link href="/blogs/questions-first-physiotherapy-assessment">seven questions for your first assessment</Link> to prepare for that conversation.</p>
        <h2 id="cost-and-coverage">How much does physiotherapy cost?</h2>
        <p>Contact reception for the current initial assessment and follow-up fees before booking. Ask what each appointment includes and how long it is scheduled for. Your total cost depends on the care agreed after assessment; there is no fixed visit count for every patient.</p>
        <p>To estimate your out-of-pocket cost, check your insurer’s per-visit reimbursement, remaining annual allowance and any deductible. Ask whether a referral is needed and whether the plan allows direct billing. You are responsible for confirming your own benefits; reception can explain the clinic’s billing arrangements.</p>
        <h2>Is physiotherapy covered by Manitoba Health?</h2>
        <p>A Manitoba Health card does not automatically pay for routine physiotherapy at a private clinic. Hospital-based therapy and specific public programs have separate eligibility and access rules. Ask the relevant program about eligibility and confirm clinic participation before booking care you expect it to fund.</p>
        <p>See <a href="https://www.gov.mb.ca/fs/imd/print,service-adults.html">Manitoba’s information about therapy services</a>. Extended health benefits, MPI and WCB follow their own approval rules.</p>
        <h2>Payment and direct billing</h2>
        <p>Direct billing is available with many plans, subject to the insurer’s terms. You may need to pay a balance or pay directly if a claim cannot be processed. Confirm fees and payment arrangements before treatment.</p>
        <p><Link href="/insurance">View insurance information</Link>, or read the guides for <Link href="/blogs/mpi-physiotherapy-claims-winnipeg">MPI appointments</Link> and <Link href="/blogs/wcb-physiotherapy-winnipeg">WCB appointments</Link>.</p>
        <h2 id="location">Find our Meadowood clinic in St. Vital</h2>
        <p>{NAP_LINE}, in the Meadowood neighbourhood of St. Vital. Free parking is available in front of the clinic. Call ahead if you need details about entry or accessibility.</p>
        <p>We welcome patients from nearby Royalwood, Lavalee, Worthington and Niakwa Place, as well as across Winnipeg. Use the map to plan your route from home or work. Call reception if you need help finding the clinic entrance.</p>
        <p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(NAP_LINE)}`} target="_blank" rel="noopener noreferrer">View the clinic on Google Maps</a></p>
        <ul><li>{COMPANY_CONTACT.HOURS.weekday}</li><li>{COMPANY_CONTACT.HOURS.saturday}</li><li>{COMPANY_CONTACT.HOURS.sunday}</li></ul>
        <h2>Meet your provider</h2>
        <p><Link href="/team">Read our team profiles</Link> and <Link href="/what-we-treat">explore the conditions we treat</Link>. If you have a specific service in mind, reception can help confirm the appropriate provider.</p>
        <h2>If your plans change</h2>
        <p>Contact reception to cancel or reschedule. Our published policy asks for at least 24 hours’ notice and lists a $25 late-cancellation fee. Confirm the policy when you book.</p>
      </div>
    </div>
  </main>
}
