/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // Never append trailing slashes — normalises /contact/ → /contact
  trailingSlash: false,

  // Security + HTTPS enforcement headers on every response
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Force HTTPS for 2 years; include subdomains
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // Upgrade any stray mixed-content requests to HTTPS at the browser level
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests',
          },
          // Prevent MIME-type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Referrer policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
