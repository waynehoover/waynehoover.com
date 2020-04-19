const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.njk',
    './src/**/*.md',
  ],
  defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    // require('postcss-preset-env')({
    //   stage: 0,
    // }),
    // require('cssnano')({
    //   preset: [
    //     'advanced',
    //     {
    //       discardComments: {
    //         removeAll: true,
    //       },
    //       reduceIdents: false,
    //     },
    //   ],
    // }),
    // require('postcss-reporter')({
    //   clearReportedMessages: true,
    // }),
    require('tailwindcss'),
    //require('postcss-nested'),
    ...(process.env.ELEVENTY_ENV === 'production' ? [purgecss] : []),
  ],
}
