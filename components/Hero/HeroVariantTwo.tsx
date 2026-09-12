'use client';

import { COMPANY_CONTACT } from '@/lib/constants';
import { ArrowRight, Phone, MapPin, CalendarDays, BadgeCheck } from 'lucide-react';
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

    </section>
  );
}
