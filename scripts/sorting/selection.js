/**
 * Performs selection sort on an array and times the sorting process.
 * The sorting process selects the smallest element and swaps it to its correct position, updating the states array for visual representation.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {Promise<number[]>} A promise that resolves to the sorted array.
 */
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
  enableButtons();
  return arr;
}

/**
 * Initializes and starts the selection sort process.
 * 
 * @returns {void}
 */
function startSelection() {
  setup();
  disableButtons();
  selectionSort(values);
}
