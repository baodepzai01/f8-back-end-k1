// bai 1
function convertMilliseconds(ms) {
  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = 60 * millisecondsPerSecond;
  const millisecondsPerHour = 60 * millisecondsPerMinute;
  const millisecondsPerDay = 24 * millisecondsPerHour;

  let days = Math.floor(ms / millisecondsPerDay);
  ms = ms % millisecondsPerDay;

  let hours = Math.floor(ms / millisecondsPerHour);
  ms = ms % millisecondsPerHour;

  let minutes = Math.floor(ms / millisecondsPerMinute);
  ms = ms % millisecondsPerMinute;

  let seconds = Math.floor(ms / millisecondsPerSecond);
  ms = ms % millisecondsPerSecond;

  let result = "";
  if (days > 0) {
    result += `${days} day${days > 1 ? "s" : ""}, `;
  }
  if (hours > 0) {
    result += `${hours} hour${hours > 1 ? "s" : ""}, `;
  }
  if (minutes > 0) {
    result += `${minutes} minute${minutes > 1 ? "s" : ""}, `;
  }
  if (seconds > 0) {
    result += `${seconds} second${seconds > 1 ? "s" : ""}, `;
  }
  if (ms > 0) {
    result += `${ms} millisecond${ms > 1 ? "s" : ""}, `;
  }

  return result.slice(0, -2);
}

console.log(convertMilliseconds(1001));
console.log(convertMilliseconds(34325055574));

// bai 2
function calculateDateDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDifference = end.getTime() - start.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  return daysDifference;
}

const startDate = "2020-01-01";
const endDate = "2020-01-22";
const result = calculateDateDifference(startDate, endDate);
console.log(result);
