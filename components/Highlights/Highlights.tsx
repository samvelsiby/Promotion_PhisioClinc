"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import RevealOnScroll from '@/components/RevealOnScroll'
import type { LucideIcon } from 'lucide-react'
import { ClipboardCheck, Clock3, WalletCards } from 'lucide-react'

interface HighlightCard {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

const cards: HighlightCard[] = [
  {
    icon: ClipboardCheck,
    title: 'Personalized Treatment Plans',
    description:
      'Every plan is tailored to your mobility goals, lifestyle, and recovery timeline for truly individualized care.',
  },
  {
    icon: Clock3,
    title: 'Convenient Scheduling',
    description:
      'Flexible appointment times that fit your busy schedule, so physiotherapy works around your life.',
  },
  {
    icon: WalletCards,
    title: 'Transparent, Simple Billing',
    description:
      'Clear pricing and support with insurance claims, WCB, and MVA so you can focus on healing, not paperwork.',
    href: '/insurance',
  },
]

export default function Highlights() {
  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63939] sm:text-sm">
              Why Patients Choose Us
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
              Designed for Comfort, Focused on Results
            </h2>
            <p className="mt-4 text-sm text-gray-600 sm:text-base">
              From your first visit to your last, every detail of our care is built to help you move better and feel better.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <RevealOnScroll key={card.title} delay={120 + index * 120}>
              <article
                className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-gray-200 bg-white px-7 py-6 text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:-rotate-2 hover:border-transparent hover:bg-[#e63939] hover:shadow-2xl"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-[#e63939] transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
                  <card.icon className="h-4 w-4" />
                </div>

                <h3 className="mb-2 text-[1.05rem] font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">
                  {card.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                  {card.description}
                </p>

                <div className="mt-auto pt-1">
                  {card.href ? (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="px-0 text-[13px] font-medium text-gray-400 underline-offset-4 hover:bg-transparent hover:text-gray-500 group-hover:text-white/90"
                    >
                      <Link href={card.href}>See More</Link>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="px-0 text-[13px] font-medium text-gray-400 underline-offset-4 hover:bg-transparent hover:text-gray-500 group-hover:text-white/90"
                    >
                      <a href="https://pmphysio.juvonno.com/portal/publicbook.php" target="_blank" rel="noopener noreferrer">
                        Book Appointment
                      </a>
                    </Button>
                  )}
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-transparent opacity-0 transition-opacity duration-300 group-hover:border-white/40 group-hover:opacity-100" />
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
