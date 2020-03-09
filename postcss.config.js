const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project 
    content: [
      './src/*.html'
    ],  
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })
  
  module.exports = {
    plugins: [
      require('tailwindcss'),
      purgecss,
      require('cssnano'),
      require('autoprefixer')
    ]
  }