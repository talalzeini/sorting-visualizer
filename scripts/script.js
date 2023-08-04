const w = 10;
const speed = 10;
const bubble = document.getElementById("bubbleID");
const selection = document.getElementById("selectionID");
const insertion = document.getElementById("insertionID");
const backgroundColorString = "#6ec5ff";

let values = [];
let states = [];

function setup() {
  stopWatch();
  createCanvas(
    displayWidthSize($(window).width()),
    displayHeightSize(
      displayWidthSize($(window).width() - $(window).width() / 3) / 2
    )
  );
  document.getElementById("defaultCanvas0").style.width = "75%";
  document
    .getElementById("defaultCanvas0")
    .classList.add("canvasNormalRotation");
  colorMode(HSB, height);
  values = new Array(floor(width / w) + 1);
  for (let i = 0; i < values.length; i++) {
    value = float(random(height) + 20);
    while (value > height) {
      value = float(random(height) + 20);
    }
    values[i] = value;
  }
  enable();
}

function draw() {
  background(backgroundColorString);
  for (let i = 0; i < values.length - 1; i++) {
    let bar = color(values[i], height, height);
    stroke(0, 0, 0);
    strokeWeight(1);
    fill(bar);
    rect(i * w, height - values[i], w, values[i]);
  }
}
