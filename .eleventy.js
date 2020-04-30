const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight')
const htmlMinTransform = require('./utils/transforms/htmlmin.js')
const contentParser = require('./utils/transforms/contentParser.js')
const htmlDate = require('./utils/filters/htmlDate.js')
const rssPlugin = require('@11ty/eleventy-plugin-rss')
const date = require('./utils/filters/date.js')
const fs = require('fs')
const getShareImage = require('./utils/filters/getShareImage.js')

require('dotenv').config();

/**
 * Import site configuration
 */
const siteConfig = require('./src/_data/config.json')

module.exports = function(eleventyConfig) {

  // shortcode for getShareImage
  eleventyConfig.addShortcode("getShareImage", function(title, tagline) {
    return getShareImage({
      title,
      tagline,
      cloudName: 'wayneslife',
      imagePublicID: 'wh.com-og2',
      titleFont: 'Inter:Inter-Black.otf',
      taglineFont: 'Inter:Inter-Regular.otf',
      textColor: 'ffffff',
      textLeftOffset: '75',
      titleLeftOffset: '75',
      textAreaWidth: '1205'
    });
  });

  /**
   * Add custom watch targets
   *
   * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   */
  eleventyConfig.addWatchTarget('./assets/')

  /**
   * Passthrough file copy
   *
   * @link https://www.11ty.io/docs/copy/
   */
  eleventyConfig.addPassthroughCopy({ './static': '.' })
  eleventyConfig.addPassthroughCopy(`./assets/css/${siteConfig.syntaxTheme}`)

  /**
   * Add filters
   *
   * @link https://www.11ty.io/docs/filters/
   */
  // human friendly date format
  eleventyConfig.addFilter('dateFilter', date)
  // robot friendly date format for crawlers
  eleventyConfig.addFilter('htmlDate', htmlDate)

  /**
   * Add Transforms
   *
   * @link https://www.11ty.io/docs/config/#transforms
   */
  if (process.env.ELEVENTY_ENV === 'production') {
    // Minify HTML when building for production
    eleventyConfig.addTransform('htmlmin', htmlMinTransform)
  }
  // Parse the page HTML content and perform some manipulation
  eleventyConfig.addTransform('contentParser', contentParser)

  /**
   * Add Plugins
   * @link https://github.com/11ty/eleventy-plugin-rss
   * @link https://github.com/11ty/eleventy-plugin-syntaxhighlight
   */
  eleventyConfig.addPlugin(rssPlugin)
  eleventyConfig.addPlugin(syntaxHighlightPlugin)

  /**
   * Create custom data collections
   * for blog and feed
   * Code from https://github.com/hankchizljaw/hylia
   */
  // Blog posts collection
  const now = new Date()
  const livePosts = post => post.date <= now && !post.data.draft
  eleventyConfig.addCollection('posts', collection => {
    const coll = [
      ...collection
        .getFilteredByGlob(
          `./${siteConfig.paths.src}/${siteConfig.paths.blogdir}/**/*`
        )
        .filter(livePosts),
    ]

    for(let i = 0; i < coll.length ; i++) {
      const prevPost = coll[i-1];
      const nextPost = coll[i + 1];

      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }

    return coll;
  })


  /**
   * Override BrowserSync Server options
   *
   * @link https://www.11ty.dev/docs/config/#override-browsersync-server-options
   */
  eleventyConfig.setBrowserSyncConfig({
    notify: false,
    open: true,
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function(snippet, match) {
          return snippet + match
        },
      },
    },
    // Set local server 404 fallback
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = 'not found'//fs.readFileSync('dist/404.html')

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  /**
   * Eleventy configuration object
   */
  return {
    dir: {
      input: siteConfig.paths.src,
      includes: siteConfig.paths.includes,
      layouts: `${siteConfig.paths.includes}/layouts`,
      output: siteConfig.paths.output,
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
