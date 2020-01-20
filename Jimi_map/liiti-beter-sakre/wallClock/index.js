let secondPin = document.getElementById('second-timer')
let minutePin = document.getElementById('minute-timer')
let hourPin = document.getElementById('hour-timer')
secondTick()


function secondTick() {
    let theTime = new Date()


    secondPin.style.transform = `rotate(${ theTime.getSeconds()/60 * 360 }deg)`;
    minutePin.style.transform = `rotate(${ theTime.getMinutes()/60 * 360 }deg)`;

    hourPin.style.transform = `rotate(${ (theTime.getHours()/12) * 360 }deg)`;





}


setInterval(secondTick, 1000)