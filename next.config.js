/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/manifest.json$/],
  disable: false,
});

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/liquidity',
        headers: [
          {
            key: 'x-custom-header',
            value: 'recent value',
          },

        ],
      },
    ]
  },
}

module.exports = withPWA(nextConfig)
