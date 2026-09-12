import Link from 'next/link'
import { COMPANY_CONTACT } from '@/lib/constants'

const steps = [
  { title: 'Start with your story', description: 'Your physiotherapist asks about your symptoms, daily activities, and goals, then assesses how you move.' },
  { title: 'Understand your care', description: 'Discuss the assessment and a treatment plan tailored to you, with time to ask questions before getting started.' },
  { title: 'Keep making progress', description: 'Leave with practical guidance and a home exercise plan to support your recovery between appointments.' },
]

export default function Highlights() {
  return <section aria-labelledby="first-visit-heading">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <h2 id="first-visit-heading" className="font-bold text-gray-900">Know what to expect at your first visit.</h2>
        <p className="mt-5 text-lg leading-relaxed text-gray-600">A clear plan starts with listening, understanding, and working together.</p>
      </div>
      <ol className="grid gap-5 md:grid-cols-3">{steps.map((step,index)=><li key={step.title} className="home-card p-6 sm:p-8">
        <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 font-semibold text-[#c8101e]" aria-hidden="true">{index+1}</span>
        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600">{step.description}</p>
      </li>)}</ol>
      <div className="mt-7 flex flex-wrap items-center gap-5">
        <a href={COMPANY_CONTACT.BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#c8101e] px-6 py-3 font-semibold text-white hover:bg-[#a50d19]">Book your first appointment</a>
        <Link href="/how-we-treat" className="inline-flex min-h-12 items-center font-semibold text-[#c8101e] underline underline-offset-4">Explore our approach to treatment</Link>
      </div>
    </div>
  </section>
}
