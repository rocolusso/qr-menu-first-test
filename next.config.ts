import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,


  env: {
    API_URL: process.env.API_URL,
  },



  i18n: {
    locales: ['ro', 'ru'],
    defaultLocale: 'ru',
    localeDetection: false,
  },



  images: {
    minimumCacheTTL: 360,
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/admin/:path*",
        destination:  `${process.env.API_URL}/:path*`, // The URL you want to redirect to
        permanent: true, // Set to true for a 308 redirect, false for a 307 redirect
      },
    ];
  },

};


// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  sw: 'sw.js',
})

module.exports = withPWA(nextConfig);
