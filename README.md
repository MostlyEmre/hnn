- [Information](#information)
- [Features](#features)
- [About the Paywall feature and the supporting NodeJS Script](#about-the-paywall-feature-and-the-supporting-nodejs-script)
  - [The Problem](#the-problem)
  - [The Solution](#the-solution)
- [A bug](#a-bug)
- [Helper functions](#helper-functions)
- [What did I do? What will I do?](#what-did-i-do-what-will-i-do)
  - [Some maybes:](#some-maybes)

## Information

[HNN](https://hn.emre.la) is a [Hacker News](https://news.ycombinator.com/) reader that I created in React, to practice React. Accessible at [hn.emre.la](hn.emre.la)

HNN uses 2 different Hacker News APIs, [Algolia HN API](https://hn.algolia.com/api) and [Firebase HN API](https://github.com/HackerNews/API). The reason for this is that one have the data that the other one does not, and the other have some APIs that the other one does not.

For this project, I applied custom css instead of delving into one of the Component or CSS libraries. I want to try Material UI in my next project and maybe Tailwind CSS after.

HNN doesn't show the children comments. So the comments are only 1 level deep.

## Features

- **All feeds are available:** You can view new posts, the frontpage, Ask HackerNews, Show HackerNews as separate feeds. You'll feel right at home.
- **Paywall detection:** Detects websites that implement paywalls or similar tactics and provides archive.is and archive.org links for the specific URL/Article both on thumbnail view and detail view.
- **Persistent favorites:** Users can favorite/unfavorite posts. They can view their favorites on the Favorites page. They can close the browser, or their computer without losing their favorites. No login required.
- **Detailed User Page:** Unlike `news.ycombinator`, HNN shows user's last 3 submissions on their profile page. Plus more.
- **Copy submission URL:** No need to copy the URL of the submission by right clicking, there's a button for that.
- **Pagination:** Easy to use navigation.
- **Context aware "Go Back" button:** You will never get lost, no matter where you click, you can always go back.

## About the Paywall feature and the supporting NodeJS Script

The paywall feature provides archive.is and archive.org URLs for the relevant article. But there's an issue.

### The Problem

Not every paywalled article is archived on archive.is or archive.or.

### The Solution

[HN Paywall Archiver](https://github.com/EmreYYZ/HN-Paywall-Archiver) is a NodeJS script I created that checks every new HackerNew post, tries to match the URL with the paywall database, and if matched, the script automatically archives the URL on Archive.is.

This way, 99% of the posts you see on HNN with the paywall warning will have their archived versions ready when you click on the `Read without Paywall` button (Or the buttons on the post page) to read.

The script is created to assist HNN. But I guess it helps humanity as a side effect by archiving the web.

## A bug

Just wanted to write it down so that I never ever forget it.

The following typo cost me 1.5 days:

❎ localStorage.getItem("favorites" === null) ? ...

✅ localStorage.getItem("favorites") === null ? ...

## Helper functions

`xAgo(unixTimestamp)` // receives Unix Timestamp, returns `6 minutes ago` type of string.

`calendarTime(unixTimestamp)` // receives Unix Timestamp, returns a calendar date like `20 Dec, 2021` as a string.

`urlDissector(url)` // receives raw URL, returns the URL hostname.

```
Raw URL:
https://www.google.com/search?q=dissecter&oq=dissecter&aqs=chrome..69i57.370j0j7&sourceid=chrome&ie=UTF-8

Returned URL Hostname:
google.com
```

## What did I do? What will I do?

The list doesn't have everything.

- [x] Automatically hide deleted comments that are still on the API.
- [x] Favorite posts.
- [x] User profiles & user's last submissions.
- [x] Pagination.
- [x] Go Back button.
- [x] Do the `new` page, `askHN` page, `showHN` page
- [x] List the last 3 submissions of a user.

### Some maybes:

- [x] Save Favorites to localStorage.
- [ ] Implement search.
- [ ] ~~Sort the comments either by their children count or karma or something.~~ (API limitations 😢)
- [x] Detect paywalled news sites and replace their URL with an archive.is one. (It can provide it as an alternative instead of replacing.) ([As requested in a comment on HN](https://news.ycombinator.com/item?id=27722427)) ([A list of popular paywalled sites](https://github.com/iamadamdev/bypass-paywalls-chrome/blob/master/src/js/sites.js))
