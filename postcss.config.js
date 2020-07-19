//postcss.config.js
const tailwindcss = require('tailwindcss')
// const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
      require('postcss-import'), // for @import statements
      tailwindcss('./tailwind.js'), // css utility library config
      // require('autoprefixer'), // auto-add prefixes like --webkit
      // Purge and minify CSS only production builds only
      // ...(process.env.NODE_ENV === "production"
      //   ? [purgecss, require("cssnano")]
      //   : []),
    ],  
};