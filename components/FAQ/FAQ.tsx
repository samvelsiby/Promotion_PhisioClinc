'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import RevealOnScroll from '@/components/RevealOnScroll'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Do I need a doctor\'s referral for physiotherapy?',
    answer:
      'In most cases, you can book an appointment directly without a referral. However, some insurance plans may require one for coverage. If you\'re unsure, we can help you check.',
  },
  {
    question: 'How long is each physiotherapy session?',
    answer:
      'Your initial assessment usually lasts 45–60 minutes. Follow-up treatments are typically 30–45 minutes, depending on your treatment plan and goals.',
  },
  {
    question: 'Do you direct bill to insurance providers?',
    answer:
      'Yes, we work with most major insurance companies, as well as WCB and MVA claims, to simplify your billing and reduce out-of-pocket costs.',
  },
  {
    question: 'What should I wear to my appointment?',
    answer:
      'We recommend comfortable, loose-fitting clothing that allows you to move freely and gives your therapist access to the area being treated.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleIndex = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63939] sm:text-sm">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]">
              Frequently Asked
              <span className="block">Questions</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <RevealOnScroll key={item.question} delay={120 + index * 120}>
                <div
                  className={cn(
                    'overflow-hidden border border-gray-200 bg-white transition-all duration-300 ease-out shadow-sm',
                    isOpen
                      ? 'rounded-[32px] shadow-md'
                      : 'rounded-full hover:shadow-md'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left sm:px-8 sm:py-5"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 sm:text-base">
                        {item.question}
                      </p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e63939] text-white transition-transform duration-300 sm:h-10 sm:w-10">
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transform transition-transform duration-300',
                          isOpen && 'rotate-180'
                        )}
                      />
                    </div>
                  </button>

                  <div
                    className={cn(
                      'grid px-6 pr-16 text-sm text-gray-600 transition-all duration-300 ease-out sm:px-8 sm:text-[0.95rem]',
                      isOpen
                        ? 'grid-rows-[1fr] pb-5 pt-0 opacity-100'
                        : 'grid-rows-[0fr] pb-0 pt-0 opacity-0'
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-1 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
