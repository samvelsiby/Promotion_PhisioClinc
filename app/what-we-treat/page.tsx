import BentoGrid from '@/components/BentoGrid/BentoGrid'
import { Calendar } from 'lucide-react'

export default function WhatWeTreatPage() {
  return (
    <main className="min-h-screen bg-white">
      <BentoGrid />
      
      {/* Book Now CTA Section */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 sm:p-12">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e63939]/10">
                <Calendar className="h-8 w-8 text-[#e63939]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                Ready to Start Your Recovery Journey?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Book an appointment with our experienced physiotherapy team and take the first step
                toward better movement, reduced pain, and improved quality of life.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://pmphysio.juvonno.com/portal/publicbook.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e63939] px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#c62828] hover:shadow-lg sm:px-10 sm:py-4 sm:text-lg"
                >
                  <Calendar className="h-5 w-5" />
                  Book Now
                </a>
                <a
                  href="/about#appointment-form"
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-300 hover:border-[#e63939] hover:bg-gray-50 sm:px-10 sm:py-4 sm:text-lg"
                >
                  Request Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

