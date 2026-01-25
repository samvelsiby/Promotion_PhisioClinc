import { MetadataRoute } from 'next'

// Service routes - manually maintained for sitemap
const serviceRoutes = [
  '/services/tmj-dysfunction',
  '/services/neck-pain-relief',
  '/services/shoulder-pain-relief',
  '/services/elbow-wrist-hand-pain-relief',
  '/services/back-pain-sciatica-relief',
  '/services/hip-knee-pain-relief',
  '/services/foot-ankle-pain-relief',
  '/services/chronic-pain-relief',
  '/services/arthritis-pain-relief',
  '/services/sports-injuries',
  '/services/work-injuries',
  '/services/motor-vehicle-accident-recovery',
  '/services/pre-post-surgical-conditions',
  '/services/home-accessibility-assessments',
  '/services/mobility-adaptive-equipment',
  '/services/wheelchair-seating-positioning',
  '/services/pressure-management',
  '/services/fall-prevention',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://promotionphysiotherapy.ca'
  
  const serviceSitemapEntries = serviceRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/what-we-treat`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-we-treat`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insurance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...serviceSitemapEntries,
  ]
}

