/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const runtimeCaching = require("next-pwa/cache");
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: isProd,
})


const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/manifest.json$/],
    scope: '/',
    maximumFileSizeToCacheInBytes: 3000000,
    disable: !isProd,
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
    images: {
        minimumCacheTTL: 60,

    },
    compiler: {
        styledComponents: true,
        removeConsole: isProd,
    },
    swcMinify: true,

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: {and: [/\.(js|ts|md)x?$/]},
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {plugins: [{removeViewBox: false}]},
                    },
                },
            ],
        });

        return config;
    },

}

module.exports = withPlugins([
    [withBundleAnalyzer(withPWA(nextConfig))],
    // your other plugins here
])


// Injected content via Sentry wizard below

const {withSentryConfig} = require("@sentry/nextjs");

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

