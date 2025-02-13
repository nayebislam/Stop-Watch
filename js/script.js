let displayTime = document.getElementById("displayTime")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let [seconds, minutes, hours] = [0,0,0]
let timer = null


function stopwatch() {
    seconds++
    if (seconds == 60) {
        seconds = 0
        minutes++
        if (minutes == 60) {
            minutes = 0
            hours++
        }
    }

    let h = hours < 10 ? "0" + hours : hours
    let min = minutes < 10 ? "0" + minutes : minutes
    let sec = seconds < 10 ? "0" + seconds : seconds

    displayTime.innerHTML = h +":"+ min +":"+ sec
}

function startwatch() {
    if (timer!== null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000)
}

function watchstop() {
    clearInterval(timer)
}

function watchreset() {
    [seconds, minutes, hours] = [0,0,0]
    displayTime.innerHTML = "00:00:00"
    clearInterval(timer)
}



start.addEventListener("click", function() {
    startwatch()
})

stop.addEventListener("click", function () {
    watchstop()
})

reset.addEventListener("click", function () {
    watchreset()
})