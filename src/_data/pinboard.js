// code mostly from https://www.11ty.dev/docs/quicktips/eliminate-js/

const pinboardUrl = 'https://feeds.pinboard.in/json/u:blissofbeing?count=20';

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
          items: json
        };
      });

    cache.setKey(key, newData);
    cache.save();
    return newData;
  }

  return cachedData;
};
