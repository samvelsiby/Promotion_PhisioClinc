'use client'

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BentoItem {
  title: string
  imageSrc: string
  href: string
  spanClass?: string
}

const items: BentoItem[] = [
  // Row 1
  {
    title: 'Electrotherapeutic Modalities',
    imageSrc: '/bento/Electrotheraputic modalities.png',
    href: '/services/electrotherapeutic-modalities',
  },
  {
    title: 'Pre / Post Surgical Conditions',
    imageSrc: '/bento/pre:post sueguery.png',
    href: '/services/pre-post-surgical-conditions',
  },
  {
    title: 'Motor Vehicle Accident Recovery',
    imageSrc: '/bento/Motorvehicel.png',
    href: '/services/motor-vehicle-accident-recovery',
  },
  // Row 2
  {
    title: 'Work Reconditioning Program',
    imageSrc: '/bento/work reconditioning.png',
    href: '/services/work-reconditioning-program',
  },
  {
    title: 'Sports Injury Rehabilitation',
    imageSrc: '/bento/sport injury rehab.png',
    href: '/services/sports-injury-rehabilitation',
  },
  {
    title: 'Chronic Pain Management',
    imageSrc: '/bento/chronicepain managemnet.png',
    href: '/services/chronic-pain-management',
  },
  // Row 3
  {
    title: 'Acupuncture & Dry Needling',
    imageSrc: '/bento/Acupunture.png',
    href: '/services/acupuncture-dry-needling',
    spanClass: 'sm:col-span-2',
  },
  {
    title: 'Workplace Injury Treatment',
    imageSrc: '/bento/Workplaceinjury.png',
    href: '/services/workplace-injury-treatment',
  },
]

export default function BentoGrid() {
  return (
    <section
      id="what-we-treat"
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
            What We Treat
          </h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            A comprehensive range of evidence-based treatments tailored to your
            specific condition and goals.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 auto-rows-[190px] sm:auto-rows-[210px] lg:auto-rows-[230px]">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                'group relative overflow-hidden rounded-[28px] bg-gray-200 shadow-md transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl',
                item.spanClass
              )}
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

              <div className="relative flex h-full items-end p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-white sm:text-base lg:text-lg">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
