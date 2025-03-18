/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Ensure Next.js uses the App Router
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

export default nextConfig;
