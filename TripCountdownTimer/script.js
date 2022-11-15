const weeksAmount = document.querySelector('.weeksAmount');
const daysAmount = document.querySelector('.daysAmount');
const hoursAmount = document.querySelector('.hoursAmount');
const minutesAmount = document.querySelector('.minutesAmount');
const secondsAmount = document.querySelector('.secondsAmount');



function countDown() {
    const now = new Date();
    const departureDay = new Date(2023, 1, 7)
  
    const timeDifference = departureDay.getTime() - now.getTime();
  
    const weeks = timeDifference / 604800000;
    const days = (timeDifference % 604800000) / 86400000;
    const hours = ((timeDifference % 604800000) % 86400000) / 3600000;
    const minutes = (((timeDifference % 604800000) % 86400000) % 3600000) / 60000;
    const seconds = ((((timeDifference % 604800000) % 86400000) % 3600000) % 60000) / 1000;

    weeksAmount.textContent = Math.floor(weeks);
    daysAmount.textContent = Math.floor(days);
    hoursAmount.textContent = Math.floor(hours);
    minutesAmount.textContent = Math.floor(minutes);
    secondsAmount.textContent = Math.floor(seconds);
  
    console.log(Math.floor(weeks) + " weeks " + Math.floor(days) + "  days " + Math.floor(hours) + " hours " + Math.floor(minutes) + " minutes " + Math.floor(seconds) + " seconds ");
  
    console.log(timeDifference);
  
  }
  
  setInterval(countDown, 1000);
