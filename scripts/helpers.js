const rangeWidth = document.getElementById("rangeWidth");
const resetButton = document.getElementById("resetButton");
const rangeToDisable = document.getElementById("rangeToDisable");
syncIcon2;

function rangeSpeed(fast) {
  speed = fast;
}

function rangeSlide(value) {
  w = value;
  setup();
}

async function swap(arr, a, b) {
  await sleep(speed);
  let t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}

function sleep(speed) {
  return new Promise((resolve) => setTimeout(resolve, speed));
}

function enable() {
  var buttons = document.getElementsByClassName("buttons");
  var resetButtons = document.getElementsByClassName("reset");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].classList.remove("disabledButton");
    buttons[i].classList.add("sort");
  }
  for (var i = 0; i < resetButtons.length; i++) {
    resetButtons[i].disabled = false;
    resetButtons[i].classList.remove("disabledButton");
    resetButtons[i].classList.add("sort");
  }
}

function disable() {
  var buttons = document.getElementsByClassName("buttons");
  var resetButtons = document.getElementsByClassName("reset");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].classList.add("disabledButton");
    buttons[i].classList.remove("sort");
  }
  for (var i = 0; i < resetButtons.length; i++) {
    resetButtons[i].disabled = true;
    resetButtons[i].classList.add("disabledButton");
    resetButtons[i].classList.remove("sort");
  }
}

function rotateButton() {
  document.getElementById("defaultCanvas0").classList.add("canvasRotation");
  document.getElementById("syncIcon").classList.add("hide");
  document.getElementById("syncIcon2").classList.remove("hide");
}

function rotateBack() {
  document.getElementById("defaultCanvas0").classList.remove("canvasRotation");
  document.getElementById("syncIcon2").classList.add("hide");
  document.getElementById("syncIcon").classList.remove("hide");
}
