'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Technique {
  name: string
  description: string
  category: 'manual' | 'exercise' | 'modality'
}

export default function HowWeTreatPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const heroImages = [
    { src: '/what-we-treat/doctor-helping-patient-rehabilitation.jpg', alt: 'Physiotherapist helping patient with rehabilitation' },
    { src: '/what-we-treat/acupuncture-process.jpg', alt: 'Acupuncture treatment session' },
    { src: '/what-we-treat/osteopathy-patient-getting-treatment-massage.jpg', alt: 'Manual therapy massage session' },
    { src: '/what-we-treat/toa-heftiba-hBLf2nvp-Yc-unsplash.jpg', alt: 'Patient stretching with therapist guidance' },
  ]

  const techniques: Technique[] = [
    {
      name: 'Manual Therapy',
      description: 'Hands-on techniques to mobilize joints, manipulate soft tissues, and restore optimal movement patterns. Helps reduce pain and improve function.',
      category: 'manual'
    },
    {
      name: 'Joint Mobilization',
      description: 'Gentle, controlled movements applied to joints to improve range of motion, reduce stiffness, and alleviate pain.',
      category: 'manual'
    },
    {
      name: 'Acupuncture',
      description: 'Traditional technique using fine needles at specific points to stimulate healing, reduce pain, and promote natural recovery.',
      category: 'manual'
    },
    {
      name: 'Dry Needling',
      description: 'Targeted insertion of thin needles into trigger points to release muscle tension, improve blood flow, and reduce pain.',
      category: 'manual'
    },
    {
      name: 'Myofascial Release',
      description: 'Specialized soft tissue technique that releases tension in the fascia, improving mobility and reducing chronic pain patterns.',
      category: 'manual'
    },
    {
      name: 'Specific Stretching and Strengthening',
      description: 'Customized exercise programs designed to improve flexibility, build strength, and address your specific movement limitations.',
      category: 'exercise'
    },
    {
      name: 'K-Taping',
      description: 'Therapeutic elastic tape applied to support muscles and joints, reduce swelling, and enhance proprioception during movement.',
      category: 'manual'
    },
    {
      name: 'Cupping',
      description: 'Suction therapy that increases blood flow, releases muscle tension, and promotes healing in targeted areas.',
      category: 'manual'
    },
    {
      name: 'Ice/Heat Therapy',
      description: 'Strategic application of cold or heat to reduce inflammation, manage pain, and promote tissue healing.',
      category: 'modality'
    },
    {
      name: 'Neural Glides',
      description: 'Gentle nerve mobilization techniques to improve nerve mobility, reduce neural tension, and alleviate radiating pain.',
      category: 'exercise'
    },
    {
      name: 'Patient Education',
      description: 'Comprehensive guidance on your condition, self-management strategies, and lifestyle modifications for long-term success.',
      category: 'exercise'
    },
    {
      name: 'Postural Analysis',
      description: 'Detailed assessment of your posture and movement patterns to identify contributing factors and develop corrective strategies.',
      category: 'exercise'
    },
    {
      name: 'Core Stability Strengthening',
      description: 'Targeted exercises to build deep core strength, improve spinal stability, and prevent future injuries.',
      category: 'exercise'
    },
    {
      name: 'Sports & Work Strengthening',
      description: 'Sport or occupation-specific training to enhance performance, build resilience, and safely return to your activities.',
      category: 'exercise'
    },
    {
      name: 'Injury Prevention/Balance Training',
      description: 'Proactive exercises and balance training to reduce injury risk, improve stability, and enhance overall movement quality.',
      category: 'exercise'
    },
    {
      name: 'Tailored Home Exercise',
      description: 'Personalized exercise programs you can perform at home to maintain progress and accelerate your recovery between sessions.',
      category: 'exercise'
    },
    {
      name: 'IFC (Interferential Current)',
      description: 'Electrical stimulation therapy that penetrates deep tissues to reduce pain, decrease inflammation, and promote healing.',
      category: 'modality'
    },
    {
      name: 'TENS (Transcutaneous Electrical Nerve Stimulation)',
      description: 'Low-voltage electrical current applied through the skin to block pain signals and stimulate endorphin production.',
      category: 'modality'
    },
    {
      name: 'EMS (Electrical Muscle Stimulation)',
      description: 'Electrical impulses to stimulate muscle contractions, strengthen weakened muscles, and improve muscle re-education.',
      category: 'modality'
    },
  ]

  const filteredTechniques = selectedCategory === 'all' 
    ? techniques 
    : techniques.filter(t => t.category === selectedCategory)

  const categories = [
    { id: 'all', label: 'All Techniques', count: techniques.length },
    { id: 'manual', label: 'Manual Therapy', count: techniques.filter(t => t.category === 'manual').length },
    { id: 'exercise', label: 'Exercise & Education', count: techniques.filter(t => t.category === 'exercise').length },
    { id: 'modality', label: 'Modalities', count: techniques.filter(t => t.category === 'modality').length },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <header className="mb-16 flex flex-col gap-10 lg:mb-20 lg:flex-row lg:items-center">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63939] sm:text-sm">
              How We Treat
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Physiotherapy Techniques
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0">
              Our team blends evidence-based treatments with human-centered care. Each plan mixes hands-on therapy,
              targeted exercise, and advanced modalities to reduce pain, restore mobility, and keep you moving with confidence.
            </p>
            <div className="mt-8 grid gap-6 text-left sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">Approach</p>
                <p className="mt-2 text-base font-semibold text-gray-900">Hands-on + Movement + Modalities</p>
                <p className="mt-1 text-sm text-gray-600">Tailored for pain relief, strength, and long-term prevention.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">Care Team</p>
                <p className="mt-2 text-base font-semibold text-gray-900">Certified Physiotherapists</p>
                <p className="mt-1 text-sm text-gray-600">Guiding you through every stage of recovery.</p>
              </div>
            </div>
          </div>

          {/* Media Collage */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {heroImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`relative h-48 overflow-hidden rounded-3xl border border-white/60 shadow-lg ${
                    index % 2 === 0 ? 'translate-y-4 sm:translate-y-8' : ''
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-[#e63939] text-white shadow-lg shadow-red-200'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Techniques Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTechniques.map((technique, index) => (
            <div
              key={technique.name}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Content */}
              <h3 className="mb-3 text-lg font-semibold text-gray-900 group-hover:text-[#e63939] transition-colors">
                {technique.name}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {technique.description}
              </p>

              {/* Category Badge */}
              <div className="mt-4">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                  technique.category === 'manual' 
                    ? 'bg-blue-100 text-blue-700'
                    : technique.category === 'exercise'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-purple-100 text-purple-700'
                }`}>
                  {technique.category === 'manual' ? 'Manual Therapy' : 
                   technique.category === 'exercise' ? 'Exercise & Education' : 'Modality'}
                </span>
              </div>

              {/* Decorative element */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#e63939]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <section className="mt-16 rounded-3xl bg-gradient-to-r from-[#e63939] to-[#c62828] p-8 text-center text-white shadow-xl sm:mt-20 sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            Your physiotherapist will explain which techniques are recommended for you and ensure that
            you feel informed, comfortable, and involved in every step of your care.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#e63939] transition-transform hover:scale-105"
            >
              Book an Appointment
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#e63939]"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  )
}
