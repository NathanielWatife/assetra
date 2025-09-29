/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // This creates a standalone output folder
  images: {
    unoptimized: true, // Required for static deployment
  },
  trailingSlash: true,
  // Remove the experimental.appDir since it's no longer needed in Next.js 14
}

module.exports = nextConfig