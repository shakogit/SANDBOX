// timer display visual content After 30 seconds 5 minutes 1 hour
let countdownData = new Date().setSeconds(new Date().getSeconds() + 12);
//countdownData = new Date().setMinutes(new Date().getMinutes() + 5);
//countdownData = new Date().setHours(new Date().getHours() + 1);
// define constants grab the html elements
const daysElem = document.getElementById('days'),
hoursEleme = document.getElementById('hours'),
minutesElem = document.getElementById('minutes'),
secondsElem = document.getElementById('seconds'),

timer = document.getElementById('timer'),
content = document.getElementById('content');
// create startCountdown function
const startCountdown = () => {
const now = new Date().getTime()//<- return the stored time value in milliseconds
// convert (countdownData) in milliseconds > via getTime() Method
const countdown = new Date(countdownData).getTime();
// create difference to calculate (now) & (countdownDate)
const difference = (countdown - now) / 1000; // divide the diff. by 1000 to convert seconds
if(difference < 1){
    endCountdown();
}
// convert seconds to days by dividing the diff. in seconds by the walue of one day
// diff / 60 seconds multyplay 60 minutes multyplay 24 hour
let days = Math.floor(difference / (60 * 60 * 24)); // rounding neares value via Math.floor()
let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60)); // modul hour
let minutes = Math.floor((difference % (60 * 60)) / 60); // module minutes
let seconds = Math.floor(difference % 60); // module second

// pass calculated values in  html elements
daysElem.innerHTML = formatTime(days, "day");
hoursEleme.innerHTML = formatTime(hours, "hour");
minutesElem.innerHTML = formatTime(minutes, "minute");
secondsElem.innerHTML = formatTime(seconds, "second");
}

// create function that format time units for innterHTML proccess < literal templates
const formatTime = (time, string) => {
    return time == 1 ? `${time} ${string}` : `${time} ${string}s`;
}
// create timerInterval that runs function (countdown) at interval 1s
let timerInterval;
// define timerInterval as a set-interval function when the page loads
window.addEventListener('load', () => {
    startCountdown();
    timerInterval = setInterval(startCountdown, 1000);
});
const endCountdown = () =>{
    clearInterval(timerInterval);
    timer.remove();
    content.classList.add('visible');
}
