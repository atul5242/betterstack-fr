/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Bun compatibility settings
  experimental: {
    // Enable Bun's faster bundling when available
    bundlePagesRouterDependencies: true,
  },
};

module.exports = nextConfig;
