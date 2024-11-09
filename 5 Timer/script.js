const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")
const timer = document.querySelector("#timer")

let interval
let timeLeft = 1500

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

    timer.innerHTML = formattedTime
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--
        updateTimer()
        if (timeLeft === 0) {
            clearInterval(interval)
            alert ("Tiem Is Up")
            timeLeft = 1500
        }
    }, 1000)
}
function stopTimer() {
    clearInterval(interval)
}
function resetTimer() {
    clearInterval(interval)
    timeLeft = 1500
    updateTimer()
}

start.addEventListener("click", startTimer)
stop.addEventListener("click", stopTimer)
reset.addEventListener("click", resetTimer)