## Information

HNN is a Hacker News reader that I created in React, to practice React.

HNN uses 2 different Hacker News APIs, Algolia HN API and Firebase HN API. The reason for this is that one have the data that the other one does not, and the other have some APIs that the other one does not.

HNN doesn't show the children comments. So the comments are only 1 level deep.

## Helper functions

`xAgo(unixTimestamp)` // receives Unix Timestamp, returns `6 minutes ago` type of string.

`calendarTime(unixTimestamp)` // receives Unix Timestamp, returns a calendar date like `20 Dec, 2021` as a string.

## What did I do? What will I do?

- [x] Automatically hide deleted comments that are still on the API.
- [ ] Favorite posts.
- [ ] Pagination.
- [ ] Sort the comments either by their children count or karma or something.
- [x] Do the `new` page, `askHN` page, `showHN` page
- [x] List the last 3 submissions of a user.

### Some maybes:

- [ ] Implement search.
- [ ] Block posts.
- [ ] Login to favorite and see your favorites.
