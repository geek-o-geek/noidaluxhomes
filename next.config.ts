/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: true, // Turbopack enabled
  },
};

module.exports = nextConfig;
