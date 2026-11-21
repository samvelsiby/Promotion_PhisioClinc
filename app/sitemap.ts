import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { fetchBlogSitemapEntries } from '@/lib/sanity'
import { getAllServiceSlugs } from '@/app/services/serviceData'
import { teamMembers } from '@/app/team/teamData'

// Keep newly published CMS articles discoverable without a new deployment.
export const revalidate = 60

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchBlogSitemapEntries()
  const paths = [
    '', '/first-visit', '/about', '/what-we-treat', '/what-we-treat/all', '/how-we-treat', '/team', '/insurance', '/blogs',
    ...getAllServiceSlugs().map((slug) => `/services/${slug}`),
    ...teamMembers.map((member) => `/team/${member.slug}`),
  ]
  // Static pages have no authoritative edit dates; do not invent lastModified.
  const entries: MetadataRoute.Sitemap = Array.from(new Set(paths)).map((path) => ({ url: `${SITE_URL}${path}` }))
  for (const post of posts) {
    const entry: MetadataRoute.Sitemap[number] = { url: `${SITE_URL}/blogs/${post.slug}` }
    if (post.updatedAt && Number.isFinite(Date.parse(post.updatedAt))) entry.lastModified = post.updatedAt
    entries.push(entry)
  }
  return Array.from(new Map(entries.map(entry => [entry.url, entry])).values())
}
