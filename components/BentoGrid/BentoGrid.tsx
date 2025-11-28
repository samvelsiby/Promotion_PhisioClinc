'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { allBentoItems, type BodyPartCategory } from './bentoItems'
import { Search } from 'lucide-react'

interface BentoGridProps {
  showAll?: boolean // If true, shows all items. If false, shows first 9 with Read More button
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

  // Determine which items to display
  const itemsToDisplay = showAll ? allBentoItems : allBentoItems.slice(0, 9)

  // Filter items based on search query and category
  const filteredItems = itemsToDisplay.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

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

        {/* Search Bar */}
        <div className="mb-6 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatment conditions..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-[#EC1C24] focus:outline-none focus:ring-2 focus:ring-[#EC1C24]/20 transition-all"
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
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-full focus:border-[#EC1C24] focus:outline-none focus:ring-2 focus:ring-[#EC1C24]/20 transition-all bg-white text-gray-900 font-medium"
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
                    ? 'bg-[#EC1C24] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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

        <div className="grid gap-4 sm:grid-cols-3 auto-rows-[240px] sm:auto-rows-[260px] lg:auto-rows-[280px]">
          {filteredItems.map((item) => (
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

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              <div className="relative flex flex-col h-full justify-end p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-white sm:text-base lg:text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 line-clamp-2 leading-tight">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Read More Button - Only show on homepage (when showAll is false) */}
        {!showAll && allBentoItems.length > 9 && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/what-we-treat"
              className="inline-flex items-center justify-center rounded-full bg-[#EC1C24] px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#C41A20] hover:shadow-lg sm:px-10 sm:py-4 sm:text-lg"
            >
              Read More
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
