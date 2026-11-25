'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Lock } from 'lucide-react'
import { recordClinicEvent } from '@/lib/analyticsEvents'
import { COMPANY_CONTACT, bookingHref } from '@/lib/constants'

// Appointment request form, shared by /request-appointment and /about.
//
// Kept short on purpose: name and phone are the only required fields. Visit type
// and preferred time are one-tap choices so reception can call back with the
// right slot. Free text is optional and visitors are asked not to put medical
// detail in it. Field names match /api/contact.

const VISIT_TYPES = ['Extended health benefits', 'MPI claim', 'WCB claim', 'Paying myself', 'Not sure'] as const
const TIMES = ['Weekday daytime', 'Weekday evening', 'Weekend', 'Any time'] as const

const inputClass =
  'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#c8101e] focus:ring-4 focus:ring-[#c8101e]/10'
const labelClass = 'mb-1.5 block text-sm font-semibold text-gray-900'
const chipClass =
  'cursor-pointer rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-400 peer-checked:border-[#c8101e] peer-checked:bg-[#c8101e] peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-[#c8101e]/20'

function Chips({ name, legend, options }: { name: string; legend: string; options: readonly string[] }) {
  return (
    <fieldset>
      <legend className={labelClass}>{legend} <span className="font-normal text-gray-500">(optional)</span></legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="relative">
            <input type="radio" name={name} value={option} className="peer sr-only" />
            <span className={`block ${chipClass}`}>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function AppointmentRequestForm({ source = 'request-page' }: { source?: string }) {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    const form = new FormData(event.currentTarget)
    const text = (key: string) => String(form.get(key) || '').trim()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: text('name'),
          phone: text('phone'),
          email: text('email'),
          visitType: text('visitType'),
          preferredTime: text('preferredTime'),
          message: text('message'),
          company: text('company'),
          source,
        }),
      })
      if (!response.ok) throw new Error('Failed to submit form')
      const result = await response.json()
      if (result.success !== true) throw new Error('The enquiry was not accepted')
      recordClinicEvent('generate_lead')
      setDone(true)
    } catch {
      setError(`We could not send your request. Please call us at ${COMPANY_CONTACT.PHONE_DISPLAY} and we will book you in.`)
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div role="status" className="text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-bold text-gray-900">Request received</h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600">
          Reception will call you during clinic hours to confirm a time. Nothing is booked until we speak with you.
        </p>
        <p className="mt-6 text-sm text-gray-600">Prefer to choose a time yourself?</p>
        <a
          href={bookingHref('request-success')}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:border-[#c8101e]"
        >
          Open online booking
        </a>
      </div>
    )
  }

  return (
    <form className="space-y-5" data-rt-label="contact" onSubmit={handleSubmit} noValidate={false}>
      {error && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="request-name" className={labelClass}>Full name</label>
          <input id="request-name" type="text" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="request-phone" className={labelClass}>Phone</label>
          <input id="request-phone" type="tel" name="phone" required autoComplete="tel" inputMode="tel" className={inputClass} placeholder="(204) 555-0123" />
        </div>
      </div>

      <div>
        <label htmlFor="request-email" className={labelClass}>Email <span className="font-normal text-gray-500">(optional)</span></label>
        <input id="request-email" type="email" name="email" autoComplete="email" className={inputClass} />
      </div>

      <Chips name="visitType" legend="How will this visit be covered?" options={VISIT_TYPES} />
      <Chips name="preferredTime" legend="When suits you best?" options={TIMES} />

      <div>
        <label htmlFor="request-message" className={labelClass}>Anything we should know? <span className="font-normal text-gray-500">(optional)</span></label>
        <textarea id="request-message" name="message" rows={2} className={inputClass} aria-describedby="request-message-hint" />
        <p id="request-message-hint" className="mt-1.5 text-xs text-gray-500">Keep it brief, for example “sore knee” or “after a collision”. Please leave out detailed medical information.</p>
      </div>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div className="hidden" aria-hidden="true">
        <label>Company<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#c8101e] px-6 text-base font-bold text-white shadow-lg shadow-[#c8101e]/20 transition hover:bg-[#a50d19] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8101e] disabled:opacity-70"
      >
        {submitting ? 'Sending…' : <>Request my appointment <ArrowRight size={18} aria-hidden="true" /></>}
      </button>

      <p className="flex items-start gap-2 text-xs leading-relaxed text-gray-500">
        <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>We use these details only to contact you about this request. See our <Link href="/privacy" className="underline">privacy notice</Link>.</span>
      </p>
    </form>
  )
}
