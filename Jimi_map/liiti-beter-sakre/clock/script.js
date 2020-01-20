function differenseBetweenDates(firstDate, secondDate) {
    let differenceMs = secondDate.getTime() - firstDate.getTime();
    return {
        days: Math.floor(differenceMs / (1000 * 60 * 60 * 24)),
        hours: Math.floor(differenceMs % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minutes: Math.floor(differenceMs % (1000 * 60 * 60) / (1000 * 60)),
        seconds: Math.ceil(differenceMs % (1000 * 60) / 1000)
    }
}

function updateTime() {

    /*
    let timeElement = document.getElementById('time');
    let timeElement2 = document.getElementById('timetime');
    let dayElement = document.getElementById('day');
    let chrismasTime = document.getElementById('chrismas')
    let today = new Date();

    let chrismasDay = new Date(today.getFullYear(), 11, 24);

    if (chrismasDay.getTime() - today.getTime() < 0) {
        chrismasDay = new Date(today.getFullYear() + 1, 11, 24)
    }

    let differenceMs = chrismasDay.getTime() - today.getTime();

    let days = differenceMs / (1000 * 60 * 60 * 24);

    let hours = differenceMs % (1000 * 60 * 60 * 24) / (1000 * 60 * 60);

    let minutes = differenceMs % (1000 * 60 * 60) / (1000 * 60)

    let seconds = differenceMs % (1000 * 60) / 1000







    chrismasTime.textContent = Math.floor(days) + " days " + Math.floor(hours) + " hours " + Math.floor(minutes) + " minutes " + Math.ceil(seconds) + " seconds " + " left" + " untill" + " chrismas!";
    */

    let timeElement = document.getElementById('time');
    let timeElement2 = document.getElementById('timetime');
    let dayElement = document.getElementById('day');
    let chrismasTime = document.getElementById('chrismas')

    let today = new Date();
    let chrismasDay = new Date(today.getFullYear(), 11, 24);
    if (chrismasDay.getTime() - today.getTime() < 0) {
        chrismasDay = new Date(today.getFullYear() + 1, 11, 24)
    }

    let difference = differenseBetweenDates(today, chrismasDay);

    chrismasTime.textContent = difference.days + ' days ' + difference.hours + ' hours ' + difference.minutes + ' minutes ' + difference.seconds + ' seconds';

    let dagArray = ["sunday", "monnday", "tuesday", "wendesday", "thursday", "friday", "saturday"];

    dayElement.textContent = "Today " + "its " + dagArray[today.getDay()]

    if (today.getMonth() < 10) {
        timeElement.textContent = today.getFullYear();
        timeElement.textContent = timeElement.textContent + "-" + today.getMonth() + 1;


    } else {
        timeElement.textContent = today.getFullYear();
        timeElement.textContent = timeElement.textContent + "-" + today.getMonth();
    }
    if (today.getDate() < 10) {
        timeElement.textContent = timeElement.textContent + "-" + "0" + today.getDate();

    } else {
        timeElement.textContent = timeElement.textContent + "-" + today.getDate();
    }

    if (today.getHours() < 10) {
        timeElement2.textContent = "0" + today.getHours();
    } else {
        timeElement2.textContent = today.getHours();
    }
    if (today.getMinutes() < 10) {
        timeElement2.textContent = timeElement2.textContent + ":" + "0" + today.getMinutes();
    } else {
        timeElement2.textContent = timeElement2.textContent + ":" + today.getMinutes();
    }
    if (today.getSeconds() < 10) {
        timeElement2.textContent = timeElement2.textContent + ":" + "0" + today.getSeconds();
    } else {
        timeElement2.textContent = timeElement2.textContent + ":" + today.getSeconds();
    }







}

setInterval(updateTime, 1000)