const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = '2023-10-01'

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment')
}

if (!dataset) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET in environment')
}

const SANITY_DATASET_URL = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`
// Query only published documents; drafts must never appear on the public site.
const publishedPosts = '_type == "post" && defined(slug.current) && !(_id in path("drafts.**")) && !(_id in path("versions.**"))'

export interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt?: string
  tag?: string
  readTime?: string
  relatedLinks?: { label: string; href: string }[]
  body?: any[]
  publishedAt?: string
  updatedAt?: string
  mainImageUrl?: string
  mainImageAlt?: string
}

interface SanityQueryResult<T> {
  result: T
}

async function sanityFetch<T>(query: string): Promise<T> {
  const url = `${SANITY_DATASET_URL}?query=${encodeURIComponent(query)}`

  const res = await fetch(url, {
    // Cache on the server and revalidate periodically
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    console.error('Sanity fetch error', await res.text())
    throw new Error('Failed to fetch data from Sanity')
  }

  const data = (await res.json()) as SanityQueryResult<T>
  return data.result
}

export async function fetchBlogPosts(limit?: number): Promise<BlogPost[]> {
  const range = typeof limit === 'number' ? `[0...${limit}]` : ''
  const query = `*[${publishedPosts}] | order(publishedAt desc, slug.current asc)${range}{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    tag,
    readTime,
    publishedAt,
    "updatedAt": _updatedAt,
    relatedLinks[]{label, href},
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt
  }`

  // Let ISR retain the last successful page if Sanity is temporarily unavailable.
  return sanityFetch<BlogPost[]>(query)
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[${publishedPosts} && slug.current == ${JSON.stringify(slug)}][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    tag,
    readTime,
    body,
    publishedAt,
    "updatedAt": _updatedAt,
    relatedLinks[]{label, href},
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt
  }`

  return sanityFetch<BlogPost | null>(query)
}

export async function fetchBlogSlugs(): Promise<{ slug: string }[]> {
  const query = `*[${publishedPosts}]{ "slug": slug.current }`
  return sanityFetch<{ slug: string }[]>(query)
}

/** Published article routes and real CMS revision dates for search discovery. */
export async function fetchBlogSitemapEntries(): Promise<{ slug: string; updatedAt?: string }[]> {
  return sanityFetch(`*[${publishedPosts}] | order(slug.current asc){ "slug": slug.current, "updatedAt": _updatedAt }`)
}
