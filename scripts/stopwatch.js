var stopWatchElement = document.getElementById("stopwatch");

var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var timer;

/**
 * Starts the stopwatch if it is not already running.
 * Adds a 'gray' class to the element with ID 'stopwatch'.
 *
 * @returns {void}
 */
function startWatch() {
  if (!timer) {
    timer = setInterval(run, 10);
    document.getElementById("stopwatch").classList.add("gray");
  }
}

/**
 * Updates the stopwatch display and increments the time.
 * Called every 10 milliseconds when the stopwatch is running.
 *
 * @returns {void}
 */
function run() {
  stopWatchElement.textContent =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds < 10 ? "0" + milliseconds : milliseconds);
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
}

/**
 * Pauses the stopwatch if it is running.
 * Removes the 'gray' class from the element with ID 'stopwatch'.
 *
 * @returns {void}
 */
function pauseWatch() {
  clearInterval(timer);
  timer = false;
  document.getElementById("stopwatch").classList.remove("gray");
}

/**
 * Stops the stopwatch, resets the time to 0, and updates the display.
 *
 * @returns {void}
 */
function stopWatch() {
  clearInterval(timer);
  timer = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  stopWatchElement.textContent =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}
