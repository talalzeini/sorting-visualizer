/**
 * Reloads the page when the window is resized.
 * This is to ensure the layout adapts to the new window size.
 */
window.onresize = function () {
  location.reload();
};

/**
 * Sets the width of the element with ID 'defaultCanvas0' and returns the new width.
 *
 * @param {string} width
 * @returns {string}
 */
function displayWidthSize(width) {
  document.getElementById("defaultCanvas0").style.width = width;
  return width;
}

/**
 * Sets the height of the element with ID 'defaultCanvas0' and returns the new height.
 *
 * @param {string} height
 * @returns {string}
 */
function displayHeightSize(height) {
  document.getElementById("defaultCanvas0").style.height = height;
  return height;
}
