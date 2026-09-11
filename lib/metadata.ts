import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export function pageMetadata(title: string, description: string, path: string, image?: string | null): Metadata {
  const url = `${SITE_URL}${path}`
  const source = image || '/Hero/hero-desktop.jpg'
  const imageUrl = source.startsWith('https://') ? source : `${SITE_URL}${source}`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', locale: 'en_CA', siteName: 'Pro Motion Physiotherapy', title, description, url, images: [{ url: imageUrl }] },
    twitter: { card: 'summary_large_image', title, description, images: [imageUrl] },
  }
}
