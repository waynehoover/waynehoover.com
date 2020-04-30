---
title: Fast Blogs with Eleventy
metaDesc: How to create a fast blog with eleventy
date: '2020-04-17'
tags:
  - eleventy
  - ssg
---

I decided it was time that my website had a blog. I wanted to keep it simple and static so that it would fast to load. So I began to research some of the more popular [static site generators](https://www.staticgen.com/). I was looking for something written in javascript, because I wanted to manage all frontend and tooling dependencies through one package manager. It eventually came down to either using [Gatsby](https://gatsbyjs.org) or [Eleventy](https://www.11ty.dev/). I could have picked the Vue ([Gidsome](https://gridsome.org/)) or Svelte ([Sapper](https://sapper.svelte.dev/)) equivalents of Gatsby but the huge Gatsby community of plugins and starters had me sold.

## Too Much javascript
Just as I was about to re-(re?)build this site with Gatsby I read a [great blog post](https://www.swyx.io/writing/svelte-static) that mentioned how a React/Gatsby sites pushes **138kb** of javascript to the client 🤔. That is hard for me to justify. So I went in the opposite direction and gave myself the challenge of creating this blog with no frontend javascript at all.

## No javascript
Other than one small [snippet](https://instant.page) of javascript to preload pages to make this site even faster, You'll find no other javascript here. No big frameworks or libraries, just pure html and css.

To build this site I started off with the 11ty [xity starter](https://xity-starter.netlify.com/) because it had a well organized file structure. From that I removed all the frontend JS, and added [tailwindcss](https://tailwindcss.com/).

If you are interested in the source code you can find it [here](https://github.com/waynehoover/waynehoover.com/).
