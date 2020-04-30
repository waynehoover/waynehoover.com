---
title: 8 Tips for a Blazing Fast Website
metaDesc: 8 easy to implement tips on how to speed up your website.
date: '2020-04-29'
tags:
  - speed optimization
---

## Why optimize for speed?

Speeding up your website might be _the_ best thing you could do to your website. Users don't want to wait for your website to load and neither does Google. Google with reward your fast website with higher rankings in its search engine, and users will thank you by, well, not leaving your site.

It's clear that _every second counts_. In fact I every tenth of a second counts. For example, Amazon famously found that for every 100ms of load time 1% of sales where lost. Walmart came to a similar conclusion when it found a 2% conversion improvement per 1 second load time improvement.

## 8 tips to optimize your website speed

In the list below I go over my top eight things I do to speed up a website. In a later post I'll share some more advanced tricks, but for now here are the top areas I focus on to optimize for website speed.

### CDN
Use A CDN to serve your assets, and limit the number of domains hosting your assets. As HTTP/2 becomes ever more common [establishing an SSL connection](https://istlsfastyet.com/) becomes a bottleneck. If we can limit the domains a client must create an SSL connection to and serve our assets from a CDN this is becomes a big win.
### Resource hints
Use [resource hints](https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch#Best_practices). This helps speed up SSL handshakes and DNS resolution time by hinting to the browser the site will need this later so cache it now.
### Minify assets
Consider using tools like [UglifyJS](https://github.com/mishoo/UglifyJS2) for javascript, [HTMLMinifier](https://github.com/kangax/html-minifier) for html, [cssnano](https://cssnano.co/) and [PurgeCSS](https://purgecss.com/) for css in your build step to reduce the size and minify your final HTML, CSS and Javascript.
### Reduce javascript size
The [cost of javascript](https://v8.dev/blog/cost-of-javascript-2019) is high because you pay in performance at least twice. Once at download time and again at execution time. There are many tricks to get your javascript size down and to speed up your javascript that you do send, so many tricks that you could fill books. But the easiest thing to do is just **SHIP LESS JAVASCRIPT**. Do you really need that big framework just to add validations to your form? Do you really need that library just to toggle a class on a button? Think before you javascript.
### Lazy load images and videos
This technique is [natively supported in chrome](https://css-tricks.com/a-deep-dive-into-native-lazy-loading-for-images-and-frames/), and a simple polyfill is worth it for other browsers. You can make your website feel blazing fast by lazy loading images and videos. If a user is scrolling on your page they are have already signaled they like what they are seeing and will have no issue with waiting for an image to load as they scroll to it. In fact this is becoming the standard that users have become used to.
### Image optimization
The TLDR here is just to use an image host like [Cloudinary](https://cloudinary.com/) or [imgIX](https://www.imgix.com/). They will automatically scale and transform your images based on the device and resolution of the user. This can be huge because most of the size of a website is in images, and to reduce your image size is to reduce your site size. I can't stress this enough. You could also use a service like [sharp](https://sharp.pixelplumbing.com/) in your build step instead of an image host.
### Video optimization
There is so much to be said here about optimizing video. I suggest watching this great [learn with Jason](https://www.youtube.com/watch?v=--U9EUy6oFA) episode to get a good rundown on how to make video fast. But again the TLDR is use an image host and only ship video that your user can actually see and use.
### Continuously monitor your website speed
You can only fix what you can measure, and [Google Page Speed](https://developers.google.com/speed/pagespeed/insights/) is critical in giving you insightful metrics on the speed of your website. I highly recommend implementing [lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci) CI/CD pipeline, there is even a nifty [github action](https://github.com/treosh/lighthouse-ci-action) that can give you insight on how each commit effects page speed.
### Make your site static
Static websites will outperform dynamic websites every time. Of course not all websites can be made static, but usually most marketing pages (like your homepage) can be made static. Serving html/css and js from a local CDN node will always outperform serving dynamic html from a single origin server. If you plan to reach a geographical diverse population this can bring a huge advantage in speed.

If you have any questions, or want to make your website faster feel free to [contact me](https://www.waynehoover.com/hire-me/) or find me on [twitter](http://twitter.com/blissofbeing) ⚡
