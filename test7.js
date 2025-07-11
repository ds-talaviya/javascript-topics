function isNumPrime(num) {
  let n = 2;
  do {
    if (num % n == 0) {
      return false;
    } else {
      n += 1;
    }
  } while (n < num);
  return true;
}

console.log(isNumPrime(13));
