function palindrome(num) {
    let result = 0;
    do {
        result = result * 10 + (num % 10);
        num = Math.floor(num / 10);
    } while (num > 0);
    return result;
}
let num = 121;
console.log(palindrome(num) == num)