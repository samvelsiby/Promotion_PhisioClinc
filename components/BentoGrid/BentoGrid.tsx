'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { allBentoItems } from './bentoItems'
import { Search } from 'lucide-react'

// Show only first 9 items (3 rows) on main page
const items = allBentoItems.slice(0, 9)

export default function BentoGrid() {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter items based on search query
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
        <div className="mb-8 max-w-2xl mx-auto">
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
          {searchQuery && (
            <p className="mt-2 text-sm text-gray-600 text-center">
              Found {filteredItems.length} condition{filteredItems.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-3 auto-rows-[190px] sm:auto-rows-[210px] lg:auto-rows-[230px]">
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

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

              <div className="relative flex h-full items-end p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-white sm:text-base lg:text-lg">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Read More Button */}
        {allBentoItems.length > items.length && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/what-we-treat/all"
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
