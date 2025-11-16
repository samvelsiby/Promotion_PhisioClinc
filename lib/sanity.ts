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

export interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt?: string
  tag?: string
  readTime?: string
  body?: any[]
  publishedAt?: string
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
  const query = `*[_type == "post"] | order(publishedAt desc)${range}{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    tag,
    readTime,
    publishedAt,
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt
  }`

  try {
    return await sanityFetch<BlogPost[]>(query)
  } catch (error) {
    console.error('Error loading blog posts from Sanity', error)
    return []
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == ${JSON.stringify(slug)}][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    tag,
    readTime,
    body,
    publishedAt,
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt
  }`

  try {
    const post = await sanityFetch<BlogPost | null>(query)
    return post
  } catch (error) {
    console.error('Error loading blog post from Sanity', error)
    return null
  }
}

export async function fetchBlogSlugs(): Promise<{ slug: string }[]> {
  const query = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`

  try {
    return await sanityFetch<{ slug: string }[]>(query)
  } catch (error) {
    console.error('Error loading blog slugs from Sanity', error)
    return []
  }
}
