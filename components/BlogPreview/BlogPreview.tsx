"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import RevealOnScroll from '@/components/RevealOnScroll'

interface BlogPreviewPost {
  title: string
  slug: string
  excerpt?: string
  tag?: string
  readTime?: string
}

interface BlogPreviewProps {
  posts: BlogPreviewPost[]
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with Background Image */}
        <RevealOnScroll>
          <div className="relative mb-16 overflow-hidden rounded-2xl sm:mb-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/Hero/hero3.jpg"
                alt="Blog banner"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
              <span className="mb-4 inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                Promotion Blogs
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Insights to Support Your Recovery
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/90 leading-relaxed">
                Stay informed with practical tips and professional guidance on injury prevention,
                rehabilitation, and healthy movement.
              </p>
            </div>
          </div>
        </RevealOnScroll>

      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex justify-end">
          <div className="hidden sm:block">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-[#e63939] px-6 text-xs font-semibold text-white hover:bg-[#c62828]"
            >
              <Link href="/blogs">View all blogs</Link>
            </Button>
          </div>
        </div>

        {/* Blog list */}
        <ul className="divide-y divide-gray-200 border-t border-gray-200">
          {posts.map((post, index) => (
            <RevealOnScroll key={post.slug} delay={120 + index * 80}>
              <li className="py-5 first:pt-0">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group flex flex-col gap-2 text-left sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="flex-1">
                    {post.tag && (
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
                        {post.tag}
                      </p>
                    )}
                    <h3 className="mt-1 text-sm font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[#e63939] sm:text-base">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                  {post.readTime && (
                    <span className="mt-1 text-xs text-gray-400 sm:ml-6 sm:mt-0">
                      {post.readTime}
                    </span>
                  )}
                </Link>
              </li>
            </RevealOnScroll>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Button
            asChild
            size="lg"
            className="w-full max-w-xs rounded-full bg-[#e63939] px-6 text-sm font-semibold text-white hover:bg-[#c62828]"
          >
            <Link href="/blogs">View all blogs</Link>
          </Button>
        </div>
      </div>
      </div>
    </section>
  )
}
