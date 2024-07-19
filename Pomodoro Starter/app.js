const timerMilliSeconds = document.querySelector(".timer__milliseconds");
const timerSeconds = document.querySelector(".timer__seconds");
const timerMinutes = document.querySelector(".timer__minutes");
const countdown = 25 * 60 * 1000

let startTime = 0;
let savedTime = 0;
let cancelId;
let stopButton = document.querySelector('.stopwatch__stop')
let resetButton = document.querySelector('.stopwatch__reset')
let startButton = document.querySelector('.stopwatch__start')

function startTimer() {
  startButton.disabled = true
  stopButton.disabled = false
  resetButton.disabled = false
  startTime = Date.now();
  cancelId = requestAnimationFrame(updateTimer);
}

function stopTimer() {
    startButton.disabled = false
    stopButton.disabled = true
    resetButton.disabled = false
   savedTime += Date.now() - startTime;
   cancelAnimationFrame(cancelId);
}
function resetTimer() {
    
    startButton.disabled = false
    stopButton.disabled = false
    resetButton.disabled = true
    startTime = 0
    cancelAnimationFrame(cancelId)
    timerMilliseconds.innerHTML = ('000');
    timerSeconds.innerHTML = ('00');
    timerMinutes.innerHTML = ('25');
}

function updateTimer() {
    let millisElapsed = Date.now() - startTime + savedTime
    
    let millisLeft = countdown - millisElapsed
    if (millisLeft < 0) {
      millisLeft = 0;
      cancelAnimationFrame(cancelId)
      cancelId = null
    }
    let secondsLeft = millisLeft / 1000
    let minutesLeft = secondsLeft / 60
  
    let millisText = millisLeft % 1000;
    let secondsText = Math.floor(secondsLeft) % 60;
    let minutesText = Math.floor(minutesLeft);
  
    if (minutesText.toString().length < 2) {
      minutesText = minutesText.toString().padStart(2, '0')
    }
    if (secondsText.toString().length < 2) {
      secondsText = secondsText.toString().padStart(2, '0')
    }
    if (millisText.toString().length < 3) {
      millisText = millisText.toString().padStart(3, '0')
    }
  
    timerMilliSeconds.innerHTML = millisText
    timerSeconds.innerHTML = secondsText;
    timerMinutes.innerHTML = minutesText;
  
    if (cancelId) {
      cancelId = requestAnimationFrame(updateTimer)
    }
  }
