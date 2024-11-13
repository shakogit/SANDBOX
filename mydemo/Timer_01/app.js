/* 1 set countdown date as a future date with a (24 hour format) */
// let countDownDate = new Date('01 January 2024 00:00'); 
/* 2 set countdown date by adding hours to the current date */
//let countDown =  new Date().setHours(new Date().getHours() + 1)
/* 3 set countdown date by adding minutes to the current date */
//let countDown =  new Date().setMinutes(new Date().getMinutes() + 5)
/* 4 set countdown date by adding seconds to the current date */
let countdownDate = new Date().setSeconds(new Date().getSeconds() + 12);
/** set const for dom to grab html lists*/

let timerInterval
const daysElem = document.querySelector("#days"),
	hoursElem = document.querySelector("#hours"),
	minutesElem = document.querySelector("#minutes"),
	secondsElem = document.querySelector("#seconds"),
	timerRunningContent = document.querySelector("#timer-running"),
	timerEndContent = document.querySelector("#timer-end")

// set actual function
const formatTime = (time, string) => {
    return time == 1 ? `<span>${time}</span> ${string} `:` <span>${time}</span> ${string}'s`
}
const startCountdown = () =>{
    // we have current date and calculate different between current date and countdown date
    const now = new Date().getTime() // > get (now) Date() in Milliseconds
    const countdown = new Date(countdownDate).getTime() //convert const (countdownDate)in Milliseconds
    const difference = (countdown - now) / 1000

    if(difference < 1){
        endCountdown()
    }
    
    let days = Math.floor(difference / (60*60*24));
    //console.log(days);
    let hours = Math.floor((difference % (60*60*24)) / (60*60));
    //console.log(hours);
    let minutes = Math.floor((difference % (60*60)) / 60);
    //console.log(minutes);
    let seconds = Math.floor(difference % 60);
   // console.log(seconds);

   // set innerHtml
   daysElem.innerHTML = formatTime(days, 'day')
   hoursElem.innerHTML = formatTime(hours, 'hour')
   minutesElem.innerHTML = formatTime(minutes, 'minute')
   secondsElem.innerHTML = formatTime(seconds, 'second')
}
const endCountdown = () =>{
    clearInterval(timerInterval) // clear timerInterval
    timerRunningContent.classList.add('hidden')
    timerEndContent.classList.add('visible')
}
window.addEventListener("load", () => {
	startCountdown()
    timerInterval = setInterval(startCountdown, 1000)
})
