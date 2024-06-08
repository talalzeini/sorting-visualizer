/**
 * Asynchronously swaps two elements in an array after a specified delay.
 *
 * @param {Array} arr - The array in which to swap elements.
 * @param {number} a - The index of the first element to swap.
 * @param {number} b - The index of the second element to swap.
 * @returns {Promise<void>} A promise that resolves after the swap is complete.
 */
async function swap(arr, a, b) {
  await sleep(speed);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

/**
 * Asynchronously pauses execution for a specified duration.
 *
 * @param {number} duration - The duration in milliseconds to pause execution.
 * @returns {Promise<void>} A promise that resolves after the specified duration.
 */
function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
