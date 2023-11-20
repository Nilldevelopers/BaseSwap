/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const runtimeCaching = require("next-pwa/cache");
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: isProd,
    openAnalyzer: isProd,
})
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin');
const withOptimizedImages = require('next-optimized-images')
const postcssConfig = require('./postcss.config.js');

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/manifest.json$/],
    scope: '/',
    maximumFileSizeToCacheInBytes: 10000,
    disable: !isProd,
});

const nextConfig = {
    compress: true,
    reactStrictMode: true,
    images: {
        minimumCacheTTL: 60,
    },
    compiler: {
        styledComponents: true,
        removeConsole: isProd,
    },
    swcMinify: true,
    webpack(config, {buildId, dev, isServer, defaultLoaders, webpack}) {
        if (!isServer && isProd) {
            Object.assign(config.resolve.alias, {
                'react': 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat',
            })
            config.plugins.push(
                new CompressionPlugin({
                    filename: '[path][base].gz',
                    algorithm: 'gzip',
                    test: /\.(js|css|html|svg)$/,
                    threshold: 10240,
                    minRatio: 0.8,
                })
            );
        }
        config.plugins.push(new DuplicatePackageCheckerPlugin())
        config.resolve.alias['fast-deep-equal'] = resolve(
            __dirname,
            'node_modules',
            'fast-deep-equal'
        )
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
        config.resolve.fallback = {fs: false, net: false, tls: false}
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resourceQuery: /icon/,
            use: ["@svgr/webpack"],
        })

        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resourceQuery: {not: [/icon/]},
            loader: "next-image-loader",
            options: {assetPrefix: ""},
        })
        config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        });

        return config;
    },
}

module.exports = withPlugins([
    [withBundleAnalyzer(withPWA(withOptimizedImages(nextConfig)))],
    // your other plugins here
])


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

