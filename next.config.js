/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const runtimeCaching = require("next-pwa/cache");


const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/manifest.json$/],
    disable: !isProd,
});

const nextConfig = {
    compress: true,
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
        removeConsole: isProd,
    },
    swcMinify: true,
    images: {
        domains: ['raw.githubusercontent.com','assets.coingecko.com','arbitrum.foundation','s2.coinmarketcap.com','ethereum-optimism.github.io'],
        minimumCacheTTL: 60,
    },

}

module.exports = withPWA(nextConfig)

// Injected content via Sentry wizard below

const {withSentryConfig} = require("@sentry/nextjs");
const {resolve} = require("path");

module.exports = withSentryConfig(
    module.exports,
    {
        // For all available options, see:
        // https://github.com/getsentry/sentry-webpack-plugin#options

        // Suppresses source map uploading logs during build
        silent: true,
        org: "nill-developers-0a",
        project: "javascript-nextjs",
    },
    {
        // For all available options, see:
        // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

        // Upload a larger set of source maps for prettier stack traces (increases build time)
        widenClientFileUpload: true,

        // Transpiles SDK to be compatible with IE11 (increases bundle size)
        transpileClientSDK: true,

        // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
        tunnelRoute: "/monitoring",

        // Hides source maps from generated client bundles
        hideSourceMaps: true,

        // Automatically tree-shake Sentry logger statements to reduce bundle size
        disableLogger: true,
    }
);

