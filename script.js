let values = [];
let w;
w = 10;

var milliseconds = 0,
  seconds = 0,
  minutes = 0;
var timer;

var stopWatchElement = document.querySelector(".stopwatch");

function startWatch() {
  if (!timer) {
    timer = setInterval(run, 10);
    document.getElementById("sw").classList.add("greenStopWatch");
    document.getElementById("sw").classList.remove("redStopWatch");
    document.getElementById("swIcon").classList.add("greenStopWatch");
    document.getElementById("swIcon").classList.remove("redStopWatch");
  }
}
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
function pauseWatch() {
  clearInterval(timer);
  timer = false;
  document.getElementById("sw").classList.remove("greenStopWatch");
  document.getElementById("sw").classList.add("redStopWatch");
  document.getElementById("swIcon").classList.remove("greenStopWatch");
  document.getElementById("swIcon").classList.add("redStopWatch");
}
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

// To store the state of each bar
// in order to change the color
let states = [];

function displayWidthSize(width) {
  document.getElementById("defaultCanvas0").style.width = width;
  return width;
}
function displayHeightSize(height) {
  document.getElementById("defaultCanvas0").style.height = height;
  return height;
}

window.onresize = function () {
  location.reload();
};
function rangeSlide(value) {
  w = value;

  setup();
}
function setup() {
  stopWatch();
  createCanvas(
    displayWidthSize(1200),
    displayHeightSize(displayWidthSize($(window).width() - 150) / 2)
  );
  document.getElementById("defaultCanvas0").style.width = "95%";

  colorMode(HSB, height);
  // Insert Random values in array
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = float(random(height) + 20);
  }
  enable();
}

// selection sort starts here
async function selectionSort(arr) {
  startWatch();
  var small;
  var i;

  for (i = 0; i < arr.length; i++) {
    small = i;
    for (var j = i + 1; j < arr.length; j++) {
      states[i + 1] = 3;
      states[i] = 0;
      states[small] = 3;
      if (arr[j] < arr[small]) {
        states[i + 1] = 3;
        states[i] = 0;
        states[small] = 2;
        small = j;
      }
    }
    // Call to swap function
    await swap(arr, small, i);
    states[small] = 2;
    states[i] = 2;
  }
  pauseWatch();
  enable();
  return arr;
}
// selection sort ends here

// bubble sort starts here
async function bubbleSort(arr) {
  startWatch();
  var k;
  var i;

  for (k = 1; k < arr.length; k++) {
    for (i = 0; i < arr.length - k - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        states[i] = 0;
        states[i + 1] = 0;
        await swap(arr, i, i + 1);
      }
    }
    states[i] = 0;
  }
  pauseWatch();
  enable();
  return arr;
}

async function insertionSort(arr) {
  startWatch();
  var i, value, index;
  for (i = 0; i < arr.length - 1; i++) {
    await sleep(speed);
    value = arr[i];
    index = i;
    while (index > 0 && arr[index - 1] > value) {
      arr[index] = arr[index - 1];
      index = index - 1;
    }
    arr[index] = value;
  }
  pauseWatch();
  enable();
  return arr;
}

// quick sort starts here

async function shakerSort(arr) {
  startWatch();
  if (arr.length <= 1) return;
  var p, i;
  for (p = 1; p <= arr.length / 2; p++) {
    await sleep(speed);
    var doneEarlyOptimization = true;
    for (i = p - 1; i < arr.length - p; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        doneEarlyOptimization = false;
      }
    }
    for (i = arr.length - p - 1; i >= p; i--) {
      await sleep(speed);
      if (arr[i] < arr[i - 1]) {
        var temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        doneEarlyOptimization = false;
      }
    }
    if (doneEarlyOptimization) break;
  }
  pauseWatch();
  enable();
  return;
}

//  draw function
function draw() {
  background(0);

  for (let i = 0; i < values.length - 1; i++) {
    let col = color(values[i], height, height);
    stroke(255, 204, 0);
    strokeWeight(3);
    fill(col);
    rect(i * w, height - values[i], w, values[i]);
  }
}

let speed = document.getElementById("rangeSpeed").innerHTML;
speed = 100;

//  swap function
async function swap(arr, a, b) {
  await sleep(speed);
  let t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}

// speed function
function sleep(speed) {
  return new Promise((resolve) => setTimeout(resolve, speed));
}

// calling selection sort
function selection() {
  setup();
  disable();
  selectionSort(values, 0, values.length);
}
// calling bubble sort
function bubble() {
  setup();
  disable();
  bubbleSort(values, 0, values.length);
}
// calling insertion sort
function insertion() {
  setup();
  disable();
  insertionSort(values, 0, values.length);
}
function heap() {
  setup();
  disable();
  heapSort(values, 0, values.length);
}

// calling quick sort
function shaker() {
  setup();
  disable();
  shakerSort(values, 0, values.length);
}

function search(ele) {
  if (event.key === "Enter") {
    eh = ele.value;
  }
}

function rangeSpeed(fast) {
  speed = fast;
}

function disable() {
  document.getElementById("rangeWidth").disabled = true;
  document.getElementById("rangeWidth").classList.add("red");

  document.getElementById("resetButton").disabled = true;
  document.getElementById("resetButton").classList.add("red");

  document.getElementById("selection").disabled = true;
  document.getElementById("selection").classList.add("redButton");
  document.getElementById("selection").classList.remove("buttons");

  document.getElementById("bubble").disabled = true;
  document.getElementById("bubble").classList.add("redButton");
  document.getElementById("bubble").classList.remove("buttons");

  document.getElementById("insertion").disabled = true;
  document.getElementById("insertion").classList.add("redButton");
  document.getElementById("insertion").classList.remove("buttons");

  document.getElementById("shaker").disabled = true;
  document.getElementById("shaker").classList.add("redButton");
  document.getElementById("shaker").classList.remove("buttons");
}

function enable() {
  document.getElementById("rangeWidth").disabled = false;
  document.getElementById("rangeWidth").classList.remove("red");

  document.getElementById("resetButton").disabled = false;
  document.getElementById("resetButton").classList.remove("red");

  document.getElementById("selection").disabled = false;
  document.getElementById("selection").classList.remove("redButton");
  document.getElementById("selection").classList.add("buttons");

  document.getElementById("bubble").disabled = false;
  document.getElementById("bubble").classList.remove("redButton");
  document.getElementById("bubble").classList.add("buttons");

  document.getElementById("insertion").disabled = false;
  document.getElementById("insertion").classList.remove("redButton");
  document.getElementById("insertion").classList.add("buttons");

  document.getElementById("shaker").disabled = false;
  document.getElementById("shaker").classList.remove("redButton");
  document.getElementById("shaker").classList.add("buttons");
}

function settingsOpen() {
  document.getElementById("settings").classList.add("hide");
  document.getElementById("info").classList.remove("hide");
  document.getElementById("close").classList.remove("hide");
}
function settingsClose() {
  document.getElementById("settings").classList.remove("hide");
  document.getElementById("info").classList.add("hide");
  document.getElementById("close").classList.add("hide");
}

function rotateButton() {
  document.getElementById("defaultCanvas0").classList.add("canvasRotation");
  document.getElementById("syncIcon").classList.add("hide");
  document.getElementById("syncIcon2").classList.add("fas");
  document.getElementById("syncIcon2").classList.add("fa-sync-alt");
  document.getElementById("syncIcon2").classList.add("sync");
  document.getElementById("syncIcon").classList.remove("fas");
  document.getElementById("syncIcon").classList.remove("fa-sync-alt");
  document.getElementById("syncIcon").classList.remove("sync");
  document.getElementById("syncIcon2").classList.remove("hide");
}
function rotateBack() {
  document.getElementById("syncIcon").classList.add("fas");
  document.getElementById("syncIcon").classList.add("fa-sync-alt");
  document.getElementById("syncIcon").classList.remove("sync");
  document.getElementById("defaultCanvas0").classList.remove("canvasRotation");
  document.getElementById("syncIcon2").classList.add("hide");
  document.getElementById("syncIcon2").classList.remove("block");
  document.getElementById("syncIcon").classList.remove("hide");
  document.getElementById("syncIcon2").classList.remove("fas");
  document.getElementById("syncIcon2").classList.remove("fa-sync-alt");
}
