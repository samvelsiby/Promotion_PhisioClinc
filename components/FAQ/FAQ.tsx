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
    question: 'Do I need a referral to see a physiotherapist?',
    answer:
      'No, you do not need a doctor\'s or other healthcare provider\'s referral to see a physiotherapist. Anyone can book an appointment,sjust give us a call! Physiotherapy can help people of all ages with a wide variety of conditions, including orthopedic and sports injuries, neurological disorders, cardiorespiratory issues, hand and workplace injuries, motor vehicle accidents, ergonomic and posture concerns, and geriatric care. Note: Some insurance plans may require a doctor\'s referral for coverage. Please check with your provider before your appointment.',
  },
  {
    question: 'What do physiotherapists do?',
    answer:
      'Physiotherapists assess, treat, and educate individuals to help them recover from injuries, improve movement, and enhance overall well-being. Their goal is to help you live your healthiest and most active lifestyle.',
  },
  {
    question: 'What should I bring to my first appointment?',
    answer:
      'Please bring: (1) A referral (if you have one) from your doctor, dentist, nurse practitioner, or another healthcare provider, (2) Your claim number and date of injury if your visit is related to a workplace injury or motor vehicle accident, (3) Your insurance card (for direct billing, if applicable), (4) Comfortable clothing — shorts if we\'re assessing your lower body, or a tank top for upper body assessments.',
  },
  {
    question: 'What can I expect at my first visit?',
    answer:
      'Free parking is available in front of the clinic. Please arrive 15–20 minutes early to complete a few forms (contact info, insurance details, and basic health information). Your physiotherapist will conduct a detailed assessment, discuss your condition and diagnosis, begin your treatment and provide a personalized home exercise plan. Your initial appointment lasts about 60–75 minutes, and follow-up visits are typically 45–60 minutes.',
  },
  {
    question: 'How many treatments will I need?',
    answer:
      'The number of sessions varies depending on factors such as the type and severity of your injury, your age and overall health, and how consistently you follow your home exercise program. Your physiotherapist will create a treatment plan tailored to your needs and adjust it as you progress.',
  },
  {
    question: 'Do you direct bill insurance companies?',
    answer:
      'Yes! Pro-Motion Physiotherapy can direct bill most insurance providers, including Manitoba Blue Cross, Great-West Life / Canada Life, Coughlin & Associates, Green Shield, Chamber of Commerce, Maximum Benefits, SSQ, ClaimSecure, Medavie Blue Cross, National Blue Cross, Johnson Group / Johnson Inc., and Interim Federal Health Program. If your provider isn\'t listed, please contact us to confirm.',
  },
  {
    question: 'Can I book appointments online?',
    answer:
      'Yes! You can conveniently book your appointments online using our booking system. If you experience any issues booking online, please call us directly and we\'ll assist you right away.',
  },
  {
    question: 'Does Manitoba Health cover physiotherapy at private clinics?',
    answer:
      'Unfortunately, Manitoba Health does not cover physiotherapy services provided in private clinics. However, many extended health insurance plans cover a portion of physiotherapy costs. Please check with your insurance provider for details.',
  },
  {
    question: 'What are your hours of operation?',
    answer:
      'Pro-Motion Physiotherapy is open Monday to Friday: 9:00 AM – 8:00 PM, Saturday: 9:00 AM – 4:00 PM, and Sunday: 10:00 AM – 4:00 PM.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We understand that schedules can change. Please notify us at least 24 hours in advance if you need to reschedule or cancel. A $25 fee applies for late cancellations.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [showAll, setShowAll] = useState(false)

  const toggleIndex = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4)

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
          {displayedFaqs.map((item, index) => {
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
