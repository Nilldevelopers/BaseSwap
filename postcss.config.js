const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss-import');
const postenv = require('postcss-preset-env');
const cssnano = require('cssnano');

module.exports = {
    plugins: [
        postcss,
        autoprefixer,
        tailwindcss,
        postenv,
        process.env.NODE_ENV === 'production' ? cssnano : false

    ]
}