function firstNonRepeatedLetter(str) {
    // for (let char of str) if (str.indexOf(char) === str.lastIndexOf(char)) return char;
    // return null;
    const counts = str.split('').reduce((a, b) => {
        a[b] = a[b] ? a[b] + 1 : 1;
        return a;
    }, {});
    return str.split('').find(char => counts[char] === 1) || null;

}
console.log(firstNonRepeatedLetter('aabbcde'))