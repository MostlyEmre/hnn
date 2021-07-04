## Information

[HNN](https://hnnetwork-a2abe.web.app/) is a [Hacker News](https://news.ycombinator.com/) reader that I created in React, to practice React.

HNN uses 2 different Hacker News APIs, [Algolia HN API](https://hn.algolia.com/api) and [Firebase HN API](https://github.com/HackerNews/API). The reason for this is that one have the data that the other one does not, and the other have some APIs that the other one does not.

For this project, I applied custom css instead of delving into one of the Component or CSS libraries. I want to try Material UI in my next project and maybe Tailwind CSS after.

HNN doesn't show the children comments. So the comments are only 1 level deep.

## A bug

Just wanted to write it down so that I never ever forget it.

The following typo cost me 1.5 days:

❎ localStorage.getItem("favorites" === null) ? ...

✅ localStorage.getItem("favorites") === null ? ...

## Helper functions

`xAgo(unixTimestamp)` // receives Unix Timestamp, returns `6 minutes ago` type of string.

`calendarTime(unixTimestamp)` // receives Unix Timestamp, returns a calendar date like `20 Dec, 2021` as a string.

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
- [ ] Detect paywalled news sites and replace their URL with an archive.is one. (It can provide it as an alternative instead of replacing.) ([As requested in a comment on HN](https://news.ycombinator.com/item?id=27722427)) ([A list of popular paywalled sites](https://github.com/iamadamdev/bypass-paywalls-chrome/blob/master/src/js/sites.js))
