"use client"

import Link from 'next/link'
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
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e63939] sm:text-sm">
                Promotion Blogs
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
                Insights to Support Your Recovery
              </h2>
              <p className="mt-3 max-w-xl text-sm text-gray-600 sm:text-base">
                Stay informed with practical tips and expert guidance on injury prevention,
                rehabilitation, and healthy movement.
              </p>
            </div>

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
        </RevealOnScroll>

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
    </section>
  )
}
