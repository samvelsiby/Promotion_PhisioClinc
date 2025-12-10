"use client";

import Motto from '@/components/Motto/Motto'
import { ArrowRight, Phone, MapPin, Clock } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function AboutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    const form = e.currentTarget
    const formData = new FormData(form)
    
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      preferredTime: formData.get('preferredTime') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: result.message || 'Your appointment request has been submitted successfully!' 
        })
        form.reset()
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: result.error || 'Failed to submit your request. Please try again.' 
        })
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'An error occurred. Please try again or call us directly.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="w-full bg-gradient-to-b from-gray-50 to-white pb-20">
      {/* Hero / Intro */}
      <section className="w-full bg-white pt-16 pb-8 sm:pt-20 sm:pb-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e63939]">
              About Pro Motion Physiotherapy
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Redefining physiotherapy with compassion, movement, and science.
            </h1>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              We are a community-focused physiotherapy clinic built around one promise: to help you
              move better, feel stronger, and get back to what you love. On this page, you can learn
              who we are, what we treat, how we treat, and how to reach us.
            </p>
          </div>
        </div>
      </section>

      {/* Motto – reused without button */}
      <Motto showButton={false} />

      {/* 3-Step Treatment Methodology / Location & Timings / Contact */}
      <section className="mt-12 w-full">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:gap-16 lg:px-8">
          {/* 3-Step Treatment Methodology */}
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Our 3‑step treatment methodology.
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                Every plan at Pro Motion Physiotherapy follows a simple, structured process so you
                always know where you are in your recovery journey.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {/* Step 1 */}
                <div className="group flex h-full flex-col rounded-2xl border border-[#fecaca] bg-gray-50/90 p-4 shadow-sm shadow-[#fecaca]/40 ring-1 ring-[#fee2e2] transition-all duration-300 hover:-translate-y-1 hover:border-[#e63939] hover:shadow-lg hover:shadow-[#f87171]/70">
                  <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#e63939]/10 text-xs font-semibold text-[#e63939]">
                    1
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-gray-900">
                    Assess & understand
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                    We listen to your story, review your history, and complete a detailed movement
                    assessment to find the true source of your pain.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="group flex h-full flex-col rounded-2xl border border-[#fecaca] bg-gray-50/90 p-4 shadow-sm shadow-[#fecaca]/40 ring-1 ring-[#fee2e2] transition-all duration-300 hover:-translate-y-1 hover:border-[#e63939] hover:shadow-lg hover:shadow-[#f87171]/70">
                  <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#e63939]/10 text-xs font-semibold text-[#e63939]">
                    2
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-gray-900">
                    Treat & relieve
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                    Hands‑on therapy, targeted exercises, and modalities like acupuncture or dry
                    needling help reduce pain and restore comfortable movement.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="group flex h-full flex-col rounded-2xl border border-[#fecaca] bg-gray-50/90 p-4 shadow-sm shadow-[#fecaca]/40 ring-1 ring-[#fee2e2] transition-all duration-300 hover:-translate-y-1 hover:border-[#e63939] hover:shadow-lg hover:shadow-[#f87171]/70">
                  <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#e63939]/10 text-xs font-semibold text-[#e63939]">
                    3
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-gray-900">
                    Strengthen & prevent
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                    A personalized strength and mobility plan, plus education and home exercises, to
                    keep you active and reduce the chance of symptoms returning.
                  </p>
              </div>
            </div>
          </div>

          {/* Location, Timings, Phone, Request Form */}
          <div className="mx-auto w-full max-w-2xl space-y-8">
            {/* Location & Contact */}
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Clinic details
              </h2>

              <div className="space-y-4 text-sm text-gray-700 sm:text-base">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[#e63939]" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p>Unit 4, 567 St. Anne&apos;s Rd, Winnipeg, MB R2M 5B2</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-[#e63939]" />
                  <div>
                    <p className="font-semibold text-gray-900">Clinic hours</p>
                    <p>Monday – Friday: 9:00 AM – 8:00 PM</p>
                    <p>Saturday: 9:00 AM – 4:00 PM</p>
                    <p>Sunday: 10:00 AM – 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-[#e63939]" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p>
                      <a href="tel:+12045760033" className="text-[#e63939] hover:underline">
                        (204) 576-0033
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Request Appointment Form */}
            <div id="appointment-form" className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h2 className="mb-2 text-xl font-bold text-gray-900">
                Prefer to request an appointment here?
              </h2>
              <p className="mb-4 text-sm text-gray-600 sm:text-base">
                Fill out this quick form and our team will contact you to confirm your booking. You
                can also use our online booking portal any time.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {submitStatus.type && (
                  <div
                    className={`rounded-lg p-4 text-sm ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#e63939] focus:ring-2 focus:ring-[#e63939]/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#e63939] focus:ring-2 focus:ring-[#e63939]/20"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#e63939] focus:ring-2 focus:ring-[#e63939]/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                      Preferred day / time
                    </label>
                    <input
                      type="text"
                      name="preferredTime"
                      placeholder="e.g. weekday evenings, Saturday morning"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#e63939] focus:ring-2 focus:ring-[#e63939]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                    What would you like help with?
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#e63939] focus:ring-2 focus:ring-[#e63939]/20"
                    placeholder="Briefly describe your pain, injury, or goals."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#e63939] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-[#c62828] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span>
                    {isSubmitting ? 'Submitting...' : 'Submit request & open online booking'}
                  </span>
                  {!isSubmitting && <ArrowRight size={18} />}
                </button>

                <p className="mt-2 text-xs text-gray-500">
                  By submitting, you agree that our team may contact you by phone or email to
                  finalize your appointment time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


