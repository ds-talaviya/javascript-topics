function firstNonRepeatedLetter(str) {
    const counts = str.split('').reduce((a, b) => {
        a[b] = a[b] ? a[b] + 1 : 1;
        return a;
    }, {});
    return str.split('').find(char => counts[char] === 1) || null;
}
console.log(firstNonRepeatedLetter('aabbcde'))