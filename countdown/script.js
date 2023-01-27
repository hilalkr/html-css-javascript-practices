const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const newYears = "1 Jan 2024";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currenDate = new Date();

    const totalSeconds = (newYearsDate.getTime() - currenDate.getTime()) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60; 
    const seconds = Math.floor(totalSeconds) % 60; 
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time; //displays the given time value in a two-digit format
    //`0${time}`= puts a "0" at the beginning of the given value
}

countdown(); //updates for countdown
setInterval(countdown , 1000); //used to rerun the countdown() function at a certain,
                            // interval (1000 milliseconds, i.e. 1 second)


