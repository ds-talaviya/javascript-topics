function countChar(char) {
    let result = {};
    for (let i = 0; i < char.length; i++) {
        let element = char[i];
        if (result[element]) {
            result[element] += 1;
        } else {
            result[element] = 1;
        }
    };
    return result;
}

console.log(countChar("apple"))