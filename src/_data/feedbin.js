// code mostly from https://www.11ty.dev/docs/quicktips/eliminate-js/

const Parser = require('rss-parser');
const parser = new Parser();
const flatcache = require("flat-cache");
const path = require("path");

function getCacheKey() {
  let date = new Date();
  return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
}

module.exports = async function() {
  let cache = flatcache.load("feedbin-recent", path.resolve("./_datacache"));
  let key = getCacheKey();
  let cachedData = cache.getKey(key);
  if(!cachedData) {
    console.log( "Fetching new Feedbin links" );

    let newData = await parser.parseURL(process.env.FEEDBIN_FEED);

    cache.setKey(key, newData);
    cache.save();
    return newData;
  }

  return cachedData;
};
