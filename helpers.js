//
//
//
//
//
//
//
//
// range speed function starts here
// range speed function starts here
function rangeSpeed(fast) {
  speed = fast;
}
// range speed function ends here
// range speed function ends here
//
//
//
//
//
//
//
//
// range slide function starts here
// range slide function starts here
function rangeSlide(value) {
  w = value;
  setup();
}
// range slide function ends here
// range slide function ends here
//
//
//
//
//
//
//
//
// swap function starts here
// swap function starts here
async function swap(arr, a, b) {
  await sleep(speed);
  let t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}
// swap function ends here
// swap function ends here
//
//
//
//
//
//
//
//
// speed function starts here
// speed function starts here
function sleep(speed) {
  return new Promise((resolve) => setTimeout(resolve, speed));
}
// speed function ends here
// speed function ends here
//
//
//
//
//
//
//
//
// enable function starts here
// enable function starts here
function enable() {
  rangeWidth.disabled = false;
  resetButton.disabled = false;
  resetButton.classList.remove("disabledButton");
  resetButton.classList.add("reset");
  rangeToDisable.classList.add("white");
  rangeToDisable.classList.remove("gray");
  var buttons = document.getElementsByClassName("buttons");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].classList.remove("disabledButton");
    buttons[i].classList.add("sort");
  }
}
// enable function ends here
// enable function ends here
//
//
//
//
//
//
//
//
// disable function starts here
// disable function starts here
function disable() {
  rangeWidth.disabled = true;
  resetButton.disabled = true;
  resetButton.classList.add("disabledButton");
  resetButton.classList.remove("reset");
  rangeToDisable.classList.remove("white");
  rangeToDisable.classList.add("gray");

  var buttons = document.getElementsByClassName("buttons");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].classList.add("disabledButton");
    buttons[i].classList.remove("sort");
  }
}
// disable function ends here
// disable function ends here
//
//
//
//
//
//
//
//
// rotate button function starts here
// rotate button function starts here
function rotateButton() {
  document.getElementById("defaultCanvas0").classList.add("canvasRotation");
  document.getElementById("syncIcon").classList.add("hide");
  document.getElementById("syncIcon2").classList.remove("hide");
}
// rotate button function ends here
// rotate button function ends here
//
//
//
//
//
//
//
//
// rotate back function starts here
// rotate back function starts here
function rotateBack() {
  document.getElementById("defaultCanvas0").classList.remove("canvasRotation");
  document.getElementById("syncIcon2").classList.add("hide");
  document.getElementById("syncIcon").classList.remove("hide");
}
// rotate back function ends here
// rotate back function ends here
