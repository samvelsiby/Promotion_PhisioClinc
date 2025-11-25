'use client'

import { Button } from '@/components/ui/button'
import RevealOnScroll from '@/components/RevealOnScroll'
import Image from 'next/image'
import { Phone, MapPin, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-100">
        <div className="absolute inset-0 bg-[url('/Hero/hero.jpg')] bg-cover bg-center bg-no-repeat" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center py-12 text-center sm:py-16 lg:py-20">
          {/* Main Heading */}
          <RevealOnScroll>
            <div className="mb-6 space-y-2 sm:mb-8">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-[#e63939]">DRIVEN BY CARE</span>
                <br />
                <span className="text-gray-900">POWERED BY MOTION</span>
              </h1>
            </div>
          </RevealOnScroll>

          {/* Description */}
          <RevealOnScroll delay={120}>
            <div className="mb-8 max-w-3xl sm:mb-10 lg:mb-12">
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
                Founded by two dedicated physiotherapists with a shared dream and
                vision to help and serve our community with compassionate,
                personalized care. We provide evidence-based treatments tailored
                to your unique needs.
              </p>
            </div>
          </RevealOnScroll>

          {/* CTA Button */}
          <RevealOnScroll delay={220}>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-[#e63939] px-8 text-base font-semibold text-white transition-all hover:bg-[#c62828] sm:h-14 sm:px-10 sm:text-lg"
              >
                <a href="https://pmphysio.juvonno.com/portal/publicbook.php" target="_blank" rel="noopener noreferrer">
                  Request Appointment
                </a>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
