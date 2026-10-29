import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

// Google shows roughly 60 characters of a title. Keep the article title whole and
// add only as much of the brand as still fits, so the searched words are never cut off.
const TITLE_LIMIT = 60
export function blogSeoTitle(title: string): string {
  for (const suffix of [' | Pro-Motion Physiotherapy', ' | Pro-Motion']) {
    if (title.length + suffix.length <= TITLE_LIMIT) return `${title}${suffix}`
  }
  return title
}

export function pageMetadata(title: string, description: string, path: string, image?: string | null): Metadata {
  const url = `${SITE_URL}${path}`
  const source = image || '/Hero/hero-desktop.jpg'
  const imageUrl = source.startsWith('https://') ? source : `${SITE_URL}${source}`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', locale: 'en_CA', siteName: 'Pro-Motion Physiotherapy', title, description, url, images: [{ url: imageUrl }] },
    twitter: { card: 'summary_large_image', title, description, images: [imageUrl] },
  }
}
