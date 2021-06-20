var bubble = document.getElementById("bubbleID");
var selection = document.getElementById("selectionID");
var insertion = document.getElementById("insertionID");
var rangeWidth = document.getElementById("rangeWidth");
var resetButton = document.getElementById("resetButton");
var rangeToDisable = document.getElementById("rangeToDisable");
let values = [];
let states = [];
let w = 10;
let speed = 10;
//
//
//
//
//
//
//
//
// setup function starts here
// setup function starts here
function setup() {
  stopWatch();
  createCanvas(
    displayWidthSize(1200),
    displayHeightSize(displayWidthSize($(window).width() - 150) / 2)
  );
  document.getElementById("defaultCanvas0").style.width = "95%";
  colorMode(HSB, height);
  // Insert Random values in array
  values = new Array(floor(width / w) + 1);
  for (let i = 0; i < values.length; i++) {
    values[i] = float(random(height) + 20);
  }
  enable();
}
// setup function ends here
// setup function ends here
//
//
//
//
//
//
//
//
// draw function starts here
// draw function starts here
function draw() {
  background(0);
  for (let i = 0; i < values.length - 1; i++) {
    let col = color(values[i], height, height);
    stroke(255, 204, 0);
    strokeWeight(1);
    fill(col);
    rect(i * w, height - values[i], w, values[i]);
  }
}
// draw function ends here
// draw function ends here
