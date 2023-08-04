var stopWatchElement = document.querySelector(".stopwatch");
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var timer;
//
//
//
//
//
//
//
//
// start watch function starts here
// start watch function starts here
function startWatch() {
  if (!timer) {
    timer = setInterval(run, 10);
    document.getElementById("sw").classList.add("gray");
  }
}
// start watch function ends here
// start watch function ends here
//
//
//
//
//
//
//
//
// run function starts here
// run function starts here
function run() {
  stopWatchElement.textContent =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds < 10 ? "0" + milliseconds : milliseconds);
  milliseconds++;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
}
// run function ends here
// run function ends here
//
//
//
//
//
//
//
//
// pause watch function starts here
// pause watch function starts here
function pauseWatch() {
  clearInterval(timer);
  timer = false;
  document.getElementById("sw").classList.remove("gray");
}
// pause watch function ends here
// pause watch function ends here
//
//
//
//
//
//
//
//
// stop watch function starts here
// stop watch function starts here
function stopWatch() {
  clearInterval(timer);
  timer = false;
  (milliseconds = 0), (seconds = 0), (minutes = 0);
  stopWatchElement.textContent =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}
// pause watch function ends here
// pause watch function ends here