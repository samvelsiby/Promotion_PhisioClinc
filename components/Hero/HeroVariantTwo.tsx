'use client';

import { COMPANY_CONTACT } from '@/lib/constants';
import { ArrowRight, Star, Phone, MapPin, CalendarDays, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroVariantTwo() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div id="home-hero" className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="max-w-xl">
            <p className="mb-5 flex items-center gap-2 text-sm font-medium text-gray-600">
              <MapPin className="h-4 w-4 shrink-0 text-[#c8101e]" aria-hidden="true" />
              St. Vital, Winnipeg
            </p>
            <h1 className="text-[2.5rem] font-bold leading-[1.08] tracking-[-0.035em] text-gray-900 [text-wrap:balance] sm:text-5xl lg:text-[3.5rem]">
              Physiotherapy in Winnipeg, built around you.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg">
              Founded by two dedicated physiotherapists with a shared dream and vision to help and serve our community with compassionate, personalized care. We provide evidence-based treatments tailored to your unique needs.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={COMPANY_CONTACT.BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#c8101e] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#a50d19] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8101e]"
              >
                Book an appointment <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={`tel:${COMPANY_CONTACT.PHONE}`}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {COMPANY_CONTACT.PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" /> Open 7 days a week</span>
              <a href="/insurance" className="inline-flex min-h-6 items-center gap-2 underline decoration-gray-300 underline-offset-4 hover:text-[#c8101e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"><BadgeCheck className="h-4 w-4 shrink-0" aria-hidden="true" /> Direct billing available</a>
            </div>
          </div>

          <figure className="min-w-0">
            <div className="relative isolate aspect-[5/4] overflow-hidden rounded-2xl bg-gray-100 lg:aspect-[1.06/1]">
              {/* Crop the white left third out of the existing image without changing the photograph. */}
              <div className="absolute inset-y-0 -left-[52%] right-0">
                <Image
                  src="/hero2/Hero page (1).png"
                  alt="Physiotherapist assessing a patient's shoulder movement during treatment"
                  fill
                  priority
                  sizes="(min-width: 1280px) 850px, (min-width: 1024px) 70vw, 152vw"
                  className="object-cover object-center"
                  quality={80}
                />
              </div>
            </div>
            <figcaption className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-gray-600">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c8101e]" aria-hidden="true" />
              Visit us at {COMPANY_CONTACT.ADDRESS.street}, {COMPANY_CONTACT.ADDRESS.city}.
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20 lg:pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Dedicated Professionals Card */}
          <motion.div
            className="group relative overflow-hidden bg-[#e63939]/90 backdrop-blur-md p-5 transition-all hover:scale-105 min-h-[240px] flex flex-col justify-between"
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

                {/* Last-minute booking information */}
                <div className="pt-2 mt-2 border-t border-white/20">
                  <div className="px-4 py-2.5 bg-white text-[#e63939] rounded-lg text-sm">
                    <p className="font-semibold mb-1">Last-Minute Appointments Available</p>
                    <p className="text-xs text-gray-600">For urgent bookings, visit lastminutephysio.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

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
