import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const xAgo = (unixTime) => {
  return dayjs.unix(unixTime).from();
};

const calendarDate = (unixTime) => {
  return dayjs.unix(unixTime).format("MMM DD, YYYY");
};

// returns the URL's hostname
const urlDissector = (url) => {
  let dissector = new URL(url);
  let urlHostname = dissector.hostname.replace("www.", "");

  return urlHostname;
};

export { xAgo, calendarDate, urlDissector };
