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
  // Spine & Back Conditions
  {
    title: 'Back Pain & Sciatica Relief',
    imageSrc: '/bento/back-pain.png',
    href: '/services/back-pain-sciatica-relief',
  },
  {
    title: 'Neck Pain Relief',
    imageSrc: '/bento/neck-pain.png',
    href: '/services/neck-pain-relief',
  },
  // Shoulder & Upper-Body Joint Conditions
  {
    title: 'Shoulder Pain Relief',
    imageSrc: '/bento/shoulder-pain.png',
    href: '/services/shoulder-pain-relief',
  },
  {
    title: 'Elbow, Wrist & Hand Pain Relief',
    imageSrc: '/bento/elbow-wrist-hand.png',
    href: '/services/elbow-wrist-hand-pain-relief',
  },
  // Hip, Knee & Lower-Body Joint Conditions
  {
    title: 'Hip & Knee Pain Relief',
    imageSrc: '/bento/hip-knee-pain.png',
    href: '/services/hip-knee-pain-relief',
  },
  {
    title: 'Foot & Ankle Pain Relief',
    imageSrc: '/bento/foot-ankle-pain.png',
    href: '/services/foot-ankle-pain-relief',
  },
  // Chronic & Long-Term Pain Conditions
  {
    title: 'Chronic Pain Relief',
    imageSrc: '/bento/chronicepain managemnet.png',
    href: '/services/chronic-pain-relief',
  },
  {
    title: 'Arthritis Pain Relief',
    imageSrc: '/bento/arthritis-pain.png',
    href: '/services/arthritis-pain-relief',
  },
  // TMJ & Head/Face Conditions
  {
    title: 'TMJ Dysfunction',
    imageSrc: '/bento/tmj-dysfunction.png',
    href: '/services/tmj-dysfunction',
  },
  // Surgical-Related Conditions
  {
    title: 'Pre-Surgical Rehabilitation',
    imageSrc: '/bento/pre:post sueguery.png',
    href: '/services/pre-surgical-rehabilitation',
  },
  {
    title: 'Post-Surgical Rehabilitation',
    imageSrc: '/bento/pre:post sueguery.png',
    href: '/services/post-surgical-rehabilitation',
  },
  // Sports-Related Injuries
  {
    title: 'Sports Injuries',
    imageSrc: '/bento/sport injury rehab.png',
    href: '/services/sports-injuries',
  },
  // Work-Related Injuries
  {
    title: 'Work Injuries',
    imageSrc: '/bento/Workplaceinjury.png',
    href: '/services/work-injuries',
  },
  // Motor Vehicle Accident Injuries
  {
    title: 'Motor Vehicle Accident Injuries (MPI)',
    imageSrc: '/bento/Motorvehicel.png',
    href: '/services/motor-vehicle-accident-recovery',
    spanClass: 'sm:col-span-2',
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
