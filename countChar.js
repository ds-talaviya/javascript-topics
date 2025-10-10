function countChar(char) {
    // let result = {};
    // for (let i = 0; i < char.length; i++) {
    //     let element = char[i];
    //     if (result[element]) {
    //         result[element] += 1;
    //     } else {
    //         result[element] = 1;
    //     }
    // };
    // return result;

    return char.split('').reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc
    }, {})
}

console.log(countChar("apple"))