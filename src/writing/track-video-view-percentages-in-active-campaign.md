---
title: Track video view percentages in ActiveCampaign
date: '2019-04-08'
tags:
  - marketing
  - automation
---

<img src="https://res.cloudinary.com/wayneslife/image/upload/v1587251618/Group_1_fzr15z.png">

A friend wanted to know how to track video view percentages, and get this information into his CRM so he could send targeted emails to contacts based on how much they watched his video. For example if a contact only watched the first 20% of a video, he wanted to follow up with them.

There are a couple of tools around that day this already. You can generally do this with [Google Tag Manager](https://www.analyticsmania.com/post/google-tag-manager-video-tracking/) and write custom code to connect to your CRM or [PlusThis](https://www.plusthis.com/tools/50-video-triggers?ac=sgvdz5) and integrate directly with a handful of CRMs.

While PlusThis looked like a good solution we didn’t want to spend money each month to just use a single feature of their service. So I decided to code up my own solution.

My friend is using [ActiveCampaign](https://www.activecampaign.com/?_r=WN36PB97) as his CRM and email service provider so I decided to whip something together to track Wistia video view percentages with ActiveCampaign.

[Here is a link to the repo with the code](https://github.com/waynehoover/wistia-ac-track).

To set it up you’ll need a bit of technical knowledge but not much. Here is how to set it up with ActiveCampaign.

1.  In ActiveCampgain enable event tracking in `settings->Tracking->Event Tracking` and add a `videoTrack` event
2.  Remix my glitch project by [clicking here](https://glitch.com/edit/#!/remix/wistia-ac). Put in your `actid` and `eventKey` in the `.env` file, you can find these in the Event Tracking settings area.
3.  Add your glitch project created in the step above to the `acProxyUrl` in the config at the bottom of wistia-ac-track.js.
4.  Place wistia-ac-track.js on any page you want to track wistia videos.
5.  Make sure the link on the page you are tracking contains a url parameter `acEmail` with the value being an email in your ActiveCampgain account. So for example `https://waynehoover.com&acEmail=email@test.com`

And that’s it. I know there are quite a few ways to make this better (like adding tagging via the API), and there is a detailed todo list in the repo, but I feel this is a good start.

If you have any questions or would like help implementing something like this for your business [email me](mailto:w@waynehoover.com) 👋
