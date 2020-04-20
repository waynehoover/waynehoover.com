// code mostly from https://www.11ty.dev/docs/quicktips/eliminate-js/

const pinboardUrl = `https://api.pinboard.in/v1/posts/recent?auth_token=${process.env.PINBOARD_API}&format=json`;

const fetch = require("node-fetch");
const flatcache = require("flat-cache");
const path = require("path");

function getCacheKey() {
  let date = new Date();
  return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
}

module.exports = async function() {
  let cache = flatcache.load("pinboard-recent", path.resolve("./_datacache"));
  let key = getCacheKey();
  let cachedData = cache.getKey(key);
  if(!cachedData) {
    console.log( "Fetching new Pinboard links" );

    let newData = await fetch(pinboardUrl)
      .then(res => res.json())
      .then(json => {
        return {
          posts: json.posts
        };
      });

    cache.setKey(key, newData);
    cache.save();
    return newData;
  }

  return cachedData;
};
