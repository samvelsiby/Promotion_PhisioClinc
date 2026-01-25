'use client';

import Motto from '@/components/Motto/Motto'
import { ArrowRight, Phone, MapPin, Clock, Calendar, Activity, Heart, Shield } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      preferredTime: formData.get('preferredTime') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const result = await response.json()

      setSubmitStatus({
        type: 'success',
        message: result.message || 'Your appointment request has been submitted successfully!'
      })
      form.reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please call us directly at (204) 576-0033 to book your appointment.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <main className="w-full bg-white selection:bg-[#e63939]/20">
      {/* Hero / Intro */}
      <section className="relative w-full overflow-hidden bg-gray-50 py-20 lg:py-32">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#e63939]/5 blur-[100px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#e63939]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-900">
                About Our Clinic
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl font-light leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
              Redefining physiotherapy with <span className="font-bold text-[#e63939]">compassion</span>, <span className="font-bold text-gray-900">movement</span>, and <span className="font-bold text-gray-900">science</span>.
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl border-l-[3px] border-[#e63939] pl-6 ml-1">
              We are a community-focused physiotherapy clinic built around one promise: to help you
              move better, feel stronger, and get back to what you love.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Motto */}
      <Motto showButton={false} />

      {/* 3-Step Treatment Methodology */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center max-w-2xl mx-auto"
          >
            <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#e63939]">
              Our Approach
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our 3‑Step Treatment Methodology
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 leading-relaxed">
              A structured process ensuring you always know where you are in your recovery journey.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                step: "01",
                title: "Assess & Understand",
                desc: "We listen to your story, review your history, and complete a detailed movement assessment to find the true source of your pain.",
                icon: Activity
              },
              {
                step: "02",
                title: "Treat & Relieve",
                desc: "Hands‑on therapy, targeted exercises, and modalities like acupuncture or dry needling help reduce pain and restore comfortable movement.",
                icon: Heart
              },
              {
                step: "03",
                title: "Strengthen & Prevent",
                desc: "A personalized strength and mobility plan, plus education and home exercises, to keep you active and reduce the chance of symptoms returning.",
                icon: Shield
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-[2rem] bg-gray-50 p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 border border-transparent hover:border-gray-100"
              >
                <div className="absolute right-0 top-0 p-8 opacity-10 transition-opacity group-hover:opacity-100 group-hover:text-[#e63939]/10">
                  <item.icon size={120} strokeWidth={1} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-bold text-[#e63939] shadow-sm ring-1 ring-gray-100 group-hover:bg-[#e63939] group-hover:text-white transition-colors duration-300">
                    {item.step}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900 group-hover:text-[#e63939] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location & Contact Split Section */}
      <section className="py-24 bg-gradient-to-br from-[#e63939] to-[#c62828] relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute left-0 bottom-0 h-64 w-64 translate-y-1/2 -translate-x-1/2 rounded-full border-[20px] border-white/20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Visit Our Clinic</h2>
                <p className="mt-6 text-base text-white/90 sm:text-lg">
                  Conveniently located in St. Anne's Road. We're here to help you get back to your best self.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg border border-white/50">
                  <div className="bg-[#e63939]/10 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-[#e63939]" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Location</p>
                    <p className="text-gray-600 mt-1">Unit 4, 567 St. Anne&apos;s Rd<br />Winnipeg, MB R2M 5B2</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg border border-white/50">
                  <div className="bg-[#e63939]/10 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-[#e63939]" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Opening Hours</p>
                    <div className="text-gray-600 mt-1 space-y-1 text-sm">
                      <p className="flex justify-between gap-8"><span>Mon – Fri</span> <span className="font-medium">9:00 AM – 8:00 PM</span></p>
                      <p className="flex justify-between gap-8"><span>Saturday</span> <span className="font-medium">9:00 AM – 4:00 PM</span></p>
                      <p className="flex justify-between gap-8"><span>Sunday</span> <span className="font-medium">10:00 AM – 4:00 PM</span></p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg border border-white/50">
                  <div className="bg-[#e63939]/10 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-[#e63939]" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Contact</p>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+12045760033" className="hover:text-[#e63939] transition-colors">
                        (204) 576-0033
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              id="appointment-form"
              className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-2xl border border-white/20 scroll-mt-24"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Request Appointment</h3>
                <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {submitStatus.type && (
                  <div
                    className={`rounded-xl p-4 text-sm font-medium ${submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#e63939] focus:bg-white focus:ring-4 focus:ring-[#e63939]/10"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#e63939] focus:bg-white focus:ring-4 focus:ring-[#e63939]/10"
                      placeholder="(204) 555-0123"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#e63939] focus:bg-white focus:ring-4 focus:ring-[#e63939]/10"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Preferred Time</label>
                    <input
                      type="text"
                      name="preferredTime"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#e63939] focus:bg-white focus:ring-4 focus:ring-[#e63939]/10"
                      placeholder="e.g. Weekday evenings"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">How can we help?</label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#e63939] focus:bg-white focus:ring-4 focus:ring-[#e63939]/10"
                    placeholder="Tell us about your injury or pain..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl bg-[#e63939] text-base font-bold text-white shadow-lg shadow-[#e63939]/25 transition-all hover:bg-[#c62828] hover:scale-[1.02] hover:shadow-xl hover:shadow-[#e63939]/30 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit Request <ArrowRight size={18} />
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}


