const mainClock = document.querySelector("#main-clock h2")
const sec = document.querySelector("#sub-clock span:first-child")
const ampm = document.querySelector("#sub-clock span:last-child")
const dateStand = document.querySelector("#date-box span")

function findDay(dayOfWeek) {
    let ret
    if(dayOfWeek === 0){
        ret = "Sun"
    } else if(dayOfWeek === 1){
        ret = "Mon"
    } else if(dayOfWeek === 2){
        ret = "Tue"
    } else if(dayOfWeek === 3){
        ret = "Wed"
    } else if(dayOfWeek === 4){
        ret = "Thu"
    } else if(dayOfWeek === 5){
        ret = "Fri"
    } else{
        ret = "Sat"
    }
    return ret
}

function getDate(date) {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    const dayOfWeek =  date.getDay();
    const dayName = findDay(dayOfWeek);

    dateStand.innerText =`${year}.${month}.${day} ${dayName}`
}

function getClock() {
    const date = new Date();
    const hoursNum = date.getHours();
    if(hoursNum >= 12){
        hoursNum = hours - 12
        hours = String(hours).padStart(2,"0");
        ampm.innerText = "PM"
    }
    else{
        hours = String(hoursNum).padStart(2,"0");
        ampm.innerText = "AM"
    }
    const mins = String(date.getMinutes()).padStart(2,"0");
    const secs = String(date.getSeconds()).padStart(2,"0");
    mainClock.innerText = `${hours}:${mins}`;
    sec.innerText = `${secs}`

    getDate(date);
}

getClock()

setInterval(getClock, 1000)