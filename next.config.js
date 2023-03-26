/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    // localeDetection: false,
  },
};

module.exports = nextConfig;
