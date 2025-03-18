/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "cdn.hashnode.com",
      "github.com",
      "miro.medium.com",
    ],
  },
  experimental: {
    serverActions: true, // If needed, otherwise remove
  },
};

module.exports = nextConfig;
