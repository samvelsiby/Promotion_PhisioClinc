import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { fetchBlogSlugs } from '@/lib/sanity'
import { getAllServiceSlugs } from '@/app/services/serviceData'
import { teamMembers } from '@/app/team/teamData'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchBlogSlugs()
  const paths = [
    '', '/first-visit', '/about', '/what-we-treat', '/what-we-treat/all', '/how-we-treat', '/team', '/insurance', '/blogs',
    ...getAllServiceSlugs().map((slug) => `/services/${slug}`),
    ...teamMembers.map((member) => `/team/${member.slug}`),
    ...posts.map((post) => `/blogs/${post.slug}`),
  ]
  // Omit lastModified until we have actual content revision dates.
  return Array.from(new Set(paths)).map((path) => ({ url: `${SITE_URL}${path}` }))
}
