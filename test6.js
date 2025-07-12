function findMissingNum(arr) {
  // below code works only for sorted elements, otherwise you have to sort first
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i] + 1;
    }
  }
  return true;
}

console.log(findMissingNum([1, 2, 4, 5]));
