'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import RevealOnScroll from '@/components/RevealOnScroll'

import { faqs } from '@/lib/faqs'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const toggleIndex = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4)

  return (
    <section className="w-full relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="home-heading mx-auto mb-16 max-w-2xl text-center sm:mb-20">
            <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#e63939]">
              FAQs
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-4">
          {displayedFaqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <RevealOnScroll key={item.question} delay={120 + index * 120}>
                <div
                  className={cn(
                    'home-card overflow-hidden border border-gray-200 bg-white transition-all duration-300 ease-out shadow-sm',
                    isOpen
                      ? 'rounded-[32px] shadow-md'
                      : 'rounded-full hover:shadow-md'
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
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
                    id={`faq-answer-${index}`}
                    aria-hidden={!isOpen}
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

        {/* Show More/Less Button */}
        {!showAll && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-2 rounded-full border-2 border-[#e63939] bg-white px-8 py-3 text-sm font-semibold text-[#e63939] transition-all hover:bg-[#e63939] hover:text-white sm:text-base"
            >
              Show More Questions
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="group flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 sm:text-base"
            >
              Show Less
              <ChevronDown className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
