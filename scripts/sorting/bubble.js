/**
 * Performs bubble sort on an array and times the sorting process.
 * The sorting process swaps elements that are out of order and updates the states array for visual representation.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {Promise<number[]>} A promise that resolves to the sorted array.
 */
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
  enableButtons();
  return arr;
}

/**
 * Initializes and starts the bubble sort process.
 * 
 * @returns {void}
 */
function startBubble() {
  setup();
  disableButtons();
  bubbleSort(values);
}
