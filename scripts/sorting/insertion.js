/**
 * Performs insertion sort on an array and times the sorting process.
 * The sorting process inserts elements into their correct position, updating the states array for visual representation.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {Promise<number[]>} A promise that resolves to the sorted array.

 */
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
  enableButtons();
  return arr;
}

/**
 * Initializes and starts the insertion sort process.
 * 
 * @returns {void}
 */
function startInsertion() {
  setup();
  disableButtons();
  insertionSort(values);
}
