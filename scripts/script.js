const w = 10;
const speed = 10;

const backgroundColor = "#f8fafc";

let values = [];
let states = [];

/**
 * Sets up the visualization canvas and initializes the values array.
 * 
 * @returns {void}
 */
function setup() {
  stopWatch();
  // Size the canvas to exactly what is displayed (no CSS scaling, which blurs the bar borders),
  // as a whole number of bars plus 1px so the outer borders fit inside the canvas
  let canvas = createCanvas(
    floor(($(window).width() * 0.75) / w) * w + 1,
    floor($(window).width() / 3)
  );
  // Center on whole pixels, since a half-pixel offset blurs the whole canvas
  canvas.elt.style.position = "absolute";
  canvas.elt.style.left = floor(($(window).width() - width) / 2) + "px";
  canvas.elt.style.top = floor(($(window).height() - height) / 2) + "px";
  colorMode(HSB, height);
  values = new Array(floor(width / w) + 1);
  for (let i = 0; i < values.length; i++) {
    value = float(random(height) + 20);
    while (value > height) {
      value = float(random(height) + 20);
    }
    values[i] = value;
  }
  enableButtons();
}

/**
 * Draws the visualization on the canvas.
 * 
 * @returns {void}
 */
function draw() {
  background(backgroundColor);
  // Shift by half a pixel so each 1px border lands on whole pixels instead of straddling the canvas edge
  translate(0.5, 0);
  for (let i = 0; i < values.length - 1; i++) {
    let bar = color(values[i], height, height);
    stroke(0, 0, 0);
    strokeWeight(1);
    fill(bar);
    rect(i * w, height - values[i], w, values[i]);
  }
}
