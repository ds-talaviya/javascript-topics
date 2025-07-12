function sumDigitUntilOneDigit(num) {
    let sum = 0;
    do {
        sum += num % 10;
        num = Math.floor(num / 10);

        if (num <= 0 && sum > 9) {
            num = sum;
            sum = 0;
        }
    } while (num > 0)
    return sum;
}
console.log(sumDigitUntilOneDigit(532))