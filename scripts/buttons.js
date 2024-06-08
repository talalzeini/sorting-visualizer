/**
 * Enables all buttons except the reset and rotate buttons and removes the disabledButton class from them.
 * Also removes the reset and disabledButton classes from the stopwatch element.
 * 
 * @returns {void}
 */
function enableButtons() {
  var buttons = document.querySelectorAll("button");
  var stopwatch = document.getElementById("stopwatch");
  
  stopwatch.classList.remove("reset", "disabledButton");
  
  buttons.forEach(button => {
    if (button.id !== "resetButton" && button.id !== "rotateButton") {
      button.disabled = false;
      button.classList.remove("disabledButton");
      button.classList.add("sort");
    }
  });
}

/**
 * Disables all buttons except the reset and rotate buttons and adds the disabledButton class to them.
 * Also adds the reset and disabledButton classes to the stopwatch element.
 * 
 * @returns {void}
 */
function disableButtons() {
  var buttons = document.querySelectorAll("button");
  var stopwatch = document.getElementById("stopwatch");
  
  stopwatch.classList.add("reset", "disabledButton");
  
  buttons.forEach(button => {
    if (button.id !== "resetButton" && button.id !== "rotateButton") {
      button.disabled = true;
      button.classList.add("disabledButton");
      button.classList.remove("sort");
    }
  });
}

/**
 * Toggles the rotation class on the canvas and the icon for a specific button.
 * 
 * @returns {void}
 */
function toggleRotationButtonAndIcon() {
  var canvas = document.getElementById("defaultCanvas0");
  var icon = document.getElementById("rotateButton");

  // Toggle rotation class on canvas
  canvas.classList.toggle("canvasRotation");

  // Toggle icons
  if (icon.classList.contains("rotate")) {
    icon.innerHTML = '<i class="fas fa-sync-alt"></i>';
    icon.classList.remove("rotate");
  } else {
    icon.innerHTML = '<i class="fas fa-sync-alt sync"></i>';
    icon.classList.add("rotate");
  }
}
