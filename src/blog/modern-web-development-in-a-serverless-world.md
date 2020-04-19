---
title: Modern Web Development in a Serverless World
date: '2018-08-06'
tags:
  - serverless
  - ssg
---

The future of web development is being shaped by the need for fast loading websites and the rise of serverless architecture. I can see a future where most web development backends are made up of serverless functions and most frontends are static.

Speed is king. The faster your website loads the more money you make, the better your search ranking, and the happier your visitors are.
Now that the majority of users consuming content are on mobile networks it is more important than ever to have fast loading websites.

The rise of IaaS (AWS, Google Cloud, etc) has helped give rise to a new generation of PaaS utilities that are fast secure and stable. We now have an API for pretty much everything. User authentication, eCommerce, Content Management, nearly everything a web developer could need is an API call away.
The backend will turn into primarily glue code for all these various APIs. A “serverless” PaaS like stdlib or Amazon lambda could actually become most of what traditionally has made up “the backend.” If you can outsource most of your business logic to APIs why not? It’s faster and you don’t have to worry about maintaining a server or the code.

This then leaves the frontend. To make a site load fast nothing beats static assets served over a CDN. Static assets are faster than serving dynamic content. I see static site generators becoming more and more popular. Compile one time and have your site load fast for all users after.
Smashing Magazine just converted their whole blog and website to a SSG. SSGs are simple and make websites easier to maintain.
There are also all sorts of cool tricks for SSGs. For example you could use a headless CMS (via an API) to add CMS functionality to your site. A flow might be once someone edits content in the CMS it triggers a build and a deploy of the site via the SSG.

I see SSGs and PaaS APIs glued together by services like stdlib, webtask.io, amazon lambda, google cloud functions, and others as a very compelling choice, especially for getting started fast. Websites become faster and easier to maintain compiled with SSGs. The backend becomes glue code between all the APIs in use.
