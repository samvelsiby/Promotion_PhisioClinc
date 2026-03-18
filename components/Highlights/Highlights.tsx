"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import RevealOnScroll from '@/components/RevealOnScroll'
import type { LucideIcon } from 'lucide-react'
import { ClipboardCheck, Clock3, WalletCards, ArrowRight } from 'lucide-react'

interface HighlightCard {
  icon: LucideIcon
  title: string
  description: string
  image: string
  href?: string
}

const cards: HighlightCard[] = [
  {
    icon: ClipboardCheck,
    title: 'Personalized Treatment Plans',
    description:
      'Every plan is tailored to your mobility goals, lifestyle, and recovery timeline for truly individualized care.',
    image: '/features/Personalized-treatment.jpg',
  },
  {
    icon: Clock3,
    title: 'Convenient Scheduling',
    description:
      'Flexible appointment times that fit your busy schedule, so physiotherapy works around your life.',
    image: '/features/scheduling.jpg',
  },
  {
    icon: WalletCards,
    title: 'Transparent, Simple Billing',
    description:
      'Direct billing with most insurance claims / WCB/ MPI ,so you can focus on healing, not paperwork.',
    image: '/features/billing.jpg',
    href: '/insurance',
  },
]

export default function Highlights() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
            <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#e63939]">
              Why Patients Choose Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Designed for Comfort, <br className="hidden sm:block" />
              <span className="text-[#e63939]">Focused on Results</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 leading-relaxed">
              From your first visit to your last, every detail of our care is built to help you move better and feel better.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {cards.map((card, index) => (
            <RevealOnScroll key={card.title} delay={100 + index * 100}>
              <div className="group relative flex h-full flex-col overflow-hidden bg-white text-left shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 ease-out hover:-translate-y-2 hover:-rotate-1 hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden sm:h-64">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
                  />
                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-4 left-4 z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-[#e63939] shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:bg-[#e63939] group-hover:text-white">
                    <card.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-8 transition-colors duration-300 group-hover:bg-[#e63939]">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
                    {card.title}
                  </h3>
                  <p className="mb-6 flex-1 text-base leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                    {card.description}
                  </p>

                  <div className="mt-auto pt-2">
                    {card.href ? (
                      <Link
                        href={card.href}
                        className="inline-flex items-center text-sm font-bold text-gray-900 transition-colors duration-300 hover:text-[#e63939] group-hover:text-white group-hover:hover:text-white/80"
                      >
                        See More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    ) : (
                      <a
                        href="https://pmphysio.juvonno.com/portal/publicbook.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-bold text-gray-900 transition-colors duration-300 hover:text-[#e63939] group-hover:text-white group-hover:hover:text-white/80"
                      >
                        Book Appointment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
