import withPWA from '@ducanh2912/next-pwa'
import userConfig from './next.config.user.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable SWC minification for improved performance
  swcMinify: true,
  // Configure headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  // Configure redirects for improved SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      }
    ]
  },
  // Configure rewrites for clean URLs
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/innovative-method',
      }
    ]
  }
}

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return nextConfig
  }

  const merged = { ...nextConfig }

  // Merge experimental options
  if (userConfig.experimental) {
    merged.experimental = {
      ...merged.experimental,
      ...userConfig.experimental,
    }
  }

  return merged
}

const finalConfig = mergeConfig(nextConfig, userConfig)

// Apply PWA configuration
export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: false, // Enable PWA
  workboxOptions: {
    disableDevLogs: true,
  },
})(finalConfig)
