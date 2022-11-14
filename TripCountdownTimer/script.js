const now = new Date();
const departureDay = new Date(2023,1,7)
const timeDifference = departureDay.getTime() - now.getTime();

const toSeconds = timeDifference / 1000
const toMinutes = toSeconds / 60
const toHours = toMinutes /60
const toDays = toHours / 24
const toWeeks = toDays / 7

const weeksLeft = timeDifference / 604800000;
const daysLeft = timeDifference / 86400000;
const hoursLeft = timeDifference / 3600000;
const minutesLeft = timeDifference / 60000;
const secondsLeft = timeDifference / 1000;

const weeks = weeksLeft;
const days = (timeDifference % 604800000)/86400000;
const hours = ((timeDifference % 604800000)%86400000)/3600000;
const minutes = (((timeDifference % 604800000)%86400000)%3600000)/60000;
const seconds = ((((timeDifference % 604800000)%86400000)%3600000)%60000)/1000;


console.log(seconds);
