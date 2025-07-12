function isNumPrime(num) {
  if (num <= 1) return false; // 0 and 1 is not prime
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
