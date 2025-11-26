"use client";

import Motto from '@/components/Motto/Motto'
import { ArrowRight, Phone, MapPin, Clock } from 'lucide-react'
import { FormEvent } from 'react'

export default function AboutPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      window.open('https://pmphysio.juvonno.com/portal/publicbook.php', '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <main className="w-full bg-gradient-to-b from-gray-50 to-white pb-20">
      {/* Hero / Intro */}
      <section className="w-full bg-white pt-16 pb-8 sm:pt-20 sm:pb-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="w-full lg:w-1/2 space-y-4">
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

      {/* What We Treat / How We Treat / Location & Timings / Contact */}
      <section className="mt-12 w-full">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-8">
          {/* Left: What & How We Treat */}
          <div className="space-y-10">
            {/* What We Treat summary */}
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                What we treat
              </p>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Evidence-based care from head to toe.
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                From headaches and neck pain to back, hip, knee, and foot issues, our team treats
                the full spectrum of musculoskeletal conditions. We also support you before and
                after surgery to protect repairs, restore movement, and accelerate recovery.
              </p>
              <ul className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
                <li>Head & neck pain, vertigo and TMJ issues</li>
                <li>Shoulder, elbow, wrist and hand problems</li>
                <li>Back and spinal pain, including sciatica</li>
                <li>Hip, knee and lower limb conditions</li>
                <li>Foot and ankle pain, balance issues</li>
                <li>Pre & post-surgical rehabilitation</li>
              </ul>
            </div>

            {/* How We Treat – 3‑step methodology */}
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                How we treat
              </p>
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
          </div>

          {/* Right: Location, Timings, Phone, Request Form */}
          <div className="space-y-8">
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
                    <p>Pro Motion Physiotherapy<br />Winnipeg, Manitoba</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-[#e63939]" />
                  <div>
                    <p className="font-semibold text-gray-900">Clinic hours</p>
                    <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                    <p>Saturday: 9:00 AM – 1:00 PM</p>
                    <p>Sunday & holidays: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-[#e63939]" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p>
                      <a href="tel:+12045551234" className="text-[#e63939] hover:underline">
                        (204) 555‑1234
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Request Appointment Form */}
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h2 className="mb-2 text-xl font-bold text-gray-900">
                Prefer to request an appointment here?
              </h2>
              <p className="mb-4 text-sm text-gray-600 sm:text-base">
                Fill out this quick form and our team will contact you to confirm your booking. You
                can also use our online booking portal any time.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                      Full name
                    </label>
                    <input
                      type="text"
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
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#e63939] focus:ring-2 focus:ring-[#e63939]/20"
                    placeholder="Briefly describe your pain, injury, or goals."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#e63939] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-[#c62828] hover:shadow-lg"
                >
                  <span>Submit request & open online booking</span>
                  <ArrowRight size={18} />
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


