function findSecondHighest(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
let arr = [10, 12, 11, 15];
console.log(findSecondHighest(arr)[arr.length - 2]);
