/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // Keep only valid experimental features
  },
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "cdn.hashnode.com",
      "github.com",
      "miro.medium.com",
    ],
  },
};

module.exports = nextConfig; // Use module.exports unless using ESM
