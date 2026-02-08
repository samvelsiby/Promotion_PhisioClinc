'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroVariantTwo() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
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
        <div className="relative z-10 h-full flex flex-col justify-between lg:justify-start px-4 sm:px-6 lg:px-12 xl:px-16 pt-4 pb-8 sm:py-12">
          <motion.div
            className="text-left max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <p className="hidden sm:block text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
                Pro Motion Physiotherapy
              </p>
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="block text-gray-900">DRIVEN BY CARE</span>
                <span className="block text-[#e63939]">POWERED BY MOTION</span>
              </h1>
            </div>

            <p className="hidden sm:block max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg mt-6">
              Founded by two dedicated physiotherapists with a shared dream and vision to help and serve our community with compassionate, personalized care. We provide evidence-based treatments tailored to your unique needs.
            </p>
          </motion.div>

          {/* Buttons - Right below text on desktop, at bottom on mobile */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row mt-6 lg:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            <a
              href="https://pmphysio.juvonno.com/portal/publicbook.php"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center h-12 px-8 text-base font-bold text-white uppercase transition-all hover:scale-105 sm:h-14 sm:px-10 sm:text-lg z-10"
            >
              <span className="absolute inset-0 bg-[#e63939] transform -skew-x-12 transition-all hover:bg-[#c62828]" style={{ boxShadow: '2px 3px 6px rgba(0, 0, 0, 0.15)' }}></span>
              <span className="relative z-10">Book Now</span>
            </a>
            <a
              href="/about#appointment-form"
              className="relative inline-flex items-center justify-center h-12 px-8 text-base font-bold text-gray-900 uppercase transition-all hover:scale-105 sm:h-14 sm:px-10 sm:text-lg z-10"
            >
              <span className="absolute inset-0 bg-white border-2 border-gray-300 transform -skew-x-12 transition-all hover:bg-gray-50 hover:border-gray-400" style={{ boxShadow: '2px 3px 6px rgba(0, 0, 0, 0.15)' }}></span>
              <span className="relative z-10">Schedule with Us</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20 lg:pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Dedicated Professionals Card */}
          <motion.a
            href="https://share.google/gEmTKDrTwC4xx6S4C"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-[#e63939]/90 backdrop-blur-md p-5 transition-all hover:scale-105 cursor-pointer min-h-[240px] flex flex-col justify-between"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
          >
            {/* Decorative curved lines */}
            <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 400 300" preserveAspectRatio="none">
              <path d="M0,150 Q100,50 200,150 T400,150" fill="none" stroke="white" strokeWidth="2" />
              <path d="M0,200 Q100,100 200,200 T400,200" fill="none" stroke="white" strokeWidth="2" />
              <path d="M0,250 Q100,150 200,250 T400,250" fill="none" stroke="white" strokeWidth="2" />
            </svg>

            <div className="relative z-10">
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-2xl font-bold text-white leading-tight max-w-[180px]">
                  Flexible Scheduling
                </h3>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#e63939] transition-transform group-hover:rotate-45">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>
              <p className="text-white/95 text-base leading-relaxed mb-4">
                We are open on Saturday and Sunday and every day of the week.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90 text-sm">Open 7 days a week</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90 text-sm">Weekend physiotherapy services</span>
                </div>

                {/* Last-minute booking CTA */}
                <div className="pt-2 mt-2 border-t border-white/20">
                  <a
                    href="https://share.google/gEmTKDrTwC4xx6S4C"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-[#e63939] rounded-lg font-semibold text-sm transition-all hover:bg-gray-100 hover:shadow-lg hover:scale-105"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Last-Minute Appointment
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Treatment Image Card */}
          <motion.div
            className="relative h-full min-h-[240px] overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <Image
              src="/Hero/hero1.jpg"
              alt="Professional treatment"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </motion.div>

          {/* Satisfied Clients Card */}
          <motion.a
            href="https://share.google/HAWazXFacwaQqbU8P"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-white/80 backdrop-blur-md p-6 transition-all hover:scale-105 border-2 border-white/50 cursor-pointer block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          >
            {/* Decorative curved lines */}
            <svg className="absolute inset-0 h-full w-full opacity-10" viewBox="0 0 400 300" preserveAspectRatio="none">
              <path d="M0,150 Q100,50 200,150 T400,150" fill="none" stroke="#e63939" strokeWidth="2" />
              <path d="M0,200 Q100,100 200,200 T400,200" fill="none" stroke="#e63939" strokeWidth="2" />
              <path d="M0,250 Q100,150 200,250 T400,250" fill="none" stroke="#e63939" strokeWidth="2" />
            </svg>

            <div className="relative z-10">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight max-w-[180px]">
                  Our Satisfied Clients
                </h3>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition-transform group-hover:rotate-45">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>

              {/* Review Card */}
              <motion.div
                className="bg-white/60 backdrop-blur-sm p-4 border border-gray-200/50 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  "Really impressed in visit. Very friendly staff. They are well aware of what they are doing. Highly recommended for anyone who needs a physical recovery from all kind of injuries."
                </p>
                <p className="text-sm font-semibold text-gray-900">Ashwin Cherian</p>
              </motion.div>

              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-sm font-medium text-gray-600">Google Reviews</span>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
