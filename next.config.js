/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
 async redirects() {
    return [
      {
        source: '/',
        destination: '/series/tt0903747/season/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
