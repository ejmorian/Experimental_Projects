const now = new Date();
const departureDay = new Date(2023,1,7)
const timeDifference = departureDay.getTime() - now.getTime();

const toSeconds = timeDifference / 1000
const toMinutes = toSeconds / 60
const toHours = toMinutes /60
const toDays = toHours / 24
const toWeeks = toDays / 7

const weeksLeft = Math.floor(toWeeks)

const daysLeft = (toWeeks - weeksLeft)*7;
const hoursLeft = (daysLeft*24);
const minutesLeft = (hoursLeft*60).toFixed(2);
const secondsLeft = (minutesLeft*60).toFixed(2);

console.log(minutesLeft);
