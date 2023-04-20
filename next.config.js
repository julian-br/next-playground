/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/invoices',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
