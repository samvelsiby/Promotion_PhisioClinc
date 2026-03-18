'use client'

import { Button } from '@/components/ui/button'
import RevealOnScroll from '@/components/RevealOnScroll'
import Image from 'next/image'
import { ArrowRight, Users, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Main Hero Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <RevealOnScroll>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Driving Your Health Forward
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <p className="mb-8 text-lg leading-relaxed text-gray-300 sm:text-xl">
                We specialize in personalized chiropractic and physiotherapy care to help you move better, feel stronger, and live life to the fullest. Our team is here to guide you every step of the way.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={220}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg bg-[#4fd1c5] px-8 text-base font-semibold text-gray-900 transition-all hover:bg-[#38b2ac] sm:h-14 sm:px-10 sm:text-lg"
                >
                  <a href="https://pmphysio.juvonno.com/portal/publicbook.php" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-lg px-8 text-base font-semibold text-white transition-all hover:bg-white/10 sm:h-14 sm:px-10 sm:text-lg"
                >
                  <a href="/about" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column - Testimonial Card */}
          <div className="relative flex items-center justify-center">
            <RevealOnScroll delay={320}>
              <div className="relative">
                {/* Background Image */}
                <div className="relative h-[400px] w-full overflow-hidden rounded-2xl lg:h-[500px]">
                  <Image
                    src="/Hero/hero.jpg"
                    alt="Physiotherapy session"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </div>

                {/* Testimonial Card Overlay */}
                <div className="absolute bottom-8 left-8 right-8 rounded-xl bg-white/95 p-6 shadow-2xl backdrop-blur-sm">
                  <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                    "The physiotherapy sessions helped me recover quickly from a sports injury. The personalized approach made all the difference. I can't thank them enough!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e63939] text-white">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Anna Bird</p>
                      <p className="text-sm text-gray-600">Patient</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Dedicated Professionals Card */}
          <RevealOnScroll delay={420}>
            <div className="group relative overflow-hidden rounded-2xl bg-[#4fd1c5] p-8 transition-all hover:scale-105">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  Dedicated Professionals
                </h3>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">
                  <span className="text-2xl font-bold">+</span>
                </div>
              </div>
              <p className="text-gray-800">
                We go above and beyond to understand clients' needs, providing solutions that are tailored to their goals.
              </p>
            </div>
          </RevealOnScroll>

          {/* Treatment Image Card */}
          <RevealOnScroll delay={520}>
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl">
              <Image
                src="/Hero/hero.jpg"
                alt="Professional treatment"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </RevealOnScroll>

          {/* Satisfied Clients Card */}
          <RevealOnScroll delay={620}>
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 transition-all hover:scale-105">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white">
                  <span className="text-3xl font-bold">4.9</span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">
                  <span className="text-2xl font-bold">+</span>
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Our Satisfied Clients
              </h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#e63939] text-[#e63939]" />
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
