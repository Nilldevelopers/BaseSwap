module.exports = {
  plugins: {
    cssnano: process.env.NODE_ENV === 'production' ? {} : false,
  },
};