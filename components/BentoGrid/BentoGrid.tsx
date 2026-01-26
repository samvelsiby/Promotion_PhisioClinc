'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { allBentoItems, getPopularBentoItems, type BodyPartCategory } from './bentoItems'
import { Search } from 'lucide-react'
import { motion } from 'framer-motion'

interface BentoGridProps {
  showAll?: boolean // If true, shows all items. If false, shows first 8 with Read More button
}

const categories: Array<{ label: string; value: BodyPartCategory | 'All' }> = [
  { label: 'All', value: 'All' },
  { label: 'Head & Neck', value: 'Head & Neck' },
  { label: 'Upper Body', value: 'Upper Body' },
  { label: 'Back & Spine', value: 'Back & Spine' },
  { label: 'Lower Body', value: 'Lower Body' },
  { label: 'Chronic Conditions', value: 'Chronic Conditions' },
  { label: 'Injury Types', value: 'Injury Types' },
  { label: 'Surgical', value: 'Surgical' },
  { label: 'Occupational Therapy', value: 'Occupational Therapy' },
]

export default function BentoGrid({ showAll = false }: BentoGridProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<BodyPartCategory | 'All'>('All')

  // Determine which items to search through
  // Always search through all items, but limit display to 8 when no search/filter is active
  const itemsToSearch = showAll ? allBentoItems : allBentoItems

  // Filter items based on search query and category
  const filteredItems = itemsToSearch.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // On homepage: always limit to 8 items to avoid overcrowding
  // If no search/filter is active, show the 8 popular items
  // If search/filter is active, show first 8 matching results
  const itemsToDisplay = !showAll 
    ? (searchQuery || selectedCategory !== 'All' ? filteredItems.slice(0, 8) : getPopularBentoItems().slice(0, 8))
    : filteredItems

  return (
    <section
      id="what-we-treat"
      className="w-full relative pt-16 pb-8 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#e63939]">
            Our Services
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What We Treat
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 leading-relaxed">
            A comprehensive range of evidence-based treatments tailored to your
            specific condition and goals.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatment conditions..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-[#e63939] focus:outline-none focus:ring-2 focus:ring-[#e63939]/20 transition-all font-medium text-gray-700"
            />
          </div>
        </div>

        {/* Category Filter - Dropdown for Mobile, Buttons for Desktop */}
        <div className="mb-8">
          {/* Mobile Dropdown */}
          <div className="sm:hidden">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as BodyPartCategory | 'All')}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-full focus:border-[#e63939] focus:outline-none focus:ring-2 focus:ring-[#e63939]/20 transition-all bg-white text-gray-900 font-medium"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Filter Buttons */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2.5">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap',
                  selectedCategory === category.value
                    ? 'bg-[#e63939] text-white shadow-md ring-2 ring-[#e63939] ring-offset-2'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {(searchQuery || selectedCategory !== 'All') && (
          <p className="mb-6 text-sm text-gray-600 text-center">
            Found {filteredItems.length} condition{filteredItems.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {itemsToDisplay.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
            >
              <Link
                href={item.href}
                className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 ease-out hover:shadow-lg block h-full"
              >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Arrow Button */}
                <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:bg-gray-800 group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button - Only show on homepage (when showAll is false) */}
        {!showAll && allBentoItems.length > 8 && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/what-we-treat"
              className="inline-flex items-center justify-center rounded-full bg-[#e63939] px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#c62828] hover:shadow-xl sm:px-10 sm:py-4 sm:text-lg"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
