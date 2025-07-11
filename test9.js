function isArmstrongNum(num) {
    let no = num;
    let noArr = [];
    do {
        noArr.push(no % 10);
        no = Math.floor(no / 10);
    } while (no > 0);

    let sum = 0;
    let lengthOfArr = noArr.length;
    for (let i = 0; i <= noArr.length - 1; i++) {
        sum += Math.pow(noArr[i], lengthOfArr);
    }
    return sum == num;
}

console.log(isArmstrongNum(1634));
