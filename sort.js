//
//
//
//
//
//
//
//
// bubble sort starts here
// bubble sort starts here
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
  enable();
  return arr;
}
function startBubble() {
  setup();
  disable();
  bubbleSort(values, 0, values.length);
}
// bubble sort ends here
// bubble sort ends here
//
//
//
//
//
//
//
//
// selection sort starts here
// selection sort starts here
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
  enable();
  return arr;
}
function startSelection() {
  setup();
  disable();
  selectionSort(values, 0, values.length);
}
// selection sort ends here
// selection sort ends here
//
//
//
//
//
//
//
//
// insertion sort starts here
// insertion sort starts here
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
  enable();
  return arr;
}
function startInsertion() {
  setup();
  disable();
  insertionSort(values, 0, values.length);
}
// insertion sort ends here
// insertion sort ends here
