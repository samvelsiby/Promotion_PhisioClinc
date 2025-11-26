'use client'

import { Button } from '@/components/ui/button'
import RevealOnScroll from '@/components/RevealOnScroll'
import Image from 'next/image'

export default function HeroVariantTwo() {
  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image - Full Span */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero2/Hero page (1).png"
          alt="Physiotherapist helping a patient during treatment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-6 lg:px-12 xl:px-16 pt-4 pb-8 sm:py-12">
        <RevealOnScroll>
          <div className="text-left max-w-2xl">
            <div className="space-y-4">
              <p className="hidden sm:block text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
                Pro Motion Physiotherapy
              </p>
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="block text-[#e63939]">DRIVEN BY CARE</span>
                <span className="block text-gray-900">POWERED BY MOTION</span>
              </h1>
            </div>

            <p className="hidden sm:block max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg mt-6">
              Founded by two dedicated physiotherapists with a shared dream and vision to help and serve our community with compassionate, personalized care. We provide evidence-based treatments tailored to your unique needs.
            </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button 
            asChild
            className="h-12 rounded-full bg-[#e63939] px-8 text-base font-semibold text-white transition hover:bg-[#c62828] sm:h-12 sm:px-9"
          >
            <a href="https://pmphysio.juvonno.com/portal/publicbook.php" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
          <Button 
            asChild
            className="h-12 rounded-full bg-gray-600 px-8 text-base font-semibold text-white transition hover:bg-gray-700 sm:h-12 sm:px-9"
          >
            <a href="/about#appointment-form">
              Request Appointment
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
