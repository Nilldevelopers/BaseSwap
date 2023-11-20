

module.exports = {
  plugins: {
    'postcss-preset-env': {},
    cssnano: process.env.NODE_ENV === 'production' ? {} : false,
}
}