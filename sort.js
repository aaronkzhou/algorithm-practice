function buddle_sort(arr) {
  let len = arr.length - 1;
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
}

let arr = [7, 4, 3, 67, 34, 1, 8];
buddle_sort(arr);
console.log(arr); // [ 1, 3, 4, 7, 8, 34, 67 ]
// j:0  i: 0-6 --> [ 4, 3, 7, 34, 1, 8, 67 ]  move 0-6 to the last
// j:1  i: 0-5 --> [ 3, 4, 7, 1, 8, 34, 67 ]  move 0-5 to the last
// ...
// j:6  i: 0-0 --> [ 1, 3, 4, 7, 8, 34, 67 ]  move 0-0 to the last

let selectionSort = function (array) {
  for (let i = 0; i < array.length; i++) {
    //set min to the current iteration of i
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
};
let array = [3, 2, 10, 1];
console.log(selectionSort(array));
