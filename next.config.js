/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{
      source: "/what-we-treat/shoulder-pain-relief",
      destination: "/services/shoulder-pain-relief",
      permanent: true,
    }, {
      source: "/what-we-treat/foot-ankle-pain-relief",
      destination: "/services/foot-ankle-pain-relief",
      permanent: true,
    }, {
      source: '/blogs/1-5-signs-its-time-to-see-a-physiotherapist',
      destination: '/blogs/1-5-signs-it-s-time-to-see-a-physiotherapist',
      permanent: true,
    }]
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
