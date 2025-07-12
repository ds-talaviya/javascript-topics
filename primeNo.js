function primeNo(num) {
    if (num <= 1) return false; // 0 and 1 is not prime
    i = 2;
    do {
        if (num % i == 0) {
            return false;
        }
        i++;
    } while (i < num);
    return true;
}

console.log(primeNo(12))