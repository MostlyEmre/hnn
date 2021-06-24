import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const xAgo = (unixTime) => {
  return dayjs.unix(unixTime).from();
};

const calendarDate = (unixTime) => {
  return dayjs.unix(unixTime).format("MMM DD, YYYY");
};

export { xAgo, calendarDate };
