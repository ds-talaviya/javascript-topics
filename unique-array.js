let arr = [1, 2, 1, 2, 3];
// let uniqueArr = [...new Set(arr)]
// console.log(uniqueArr)

// let uniqueArr = [];
// arr.forEach((ele) => {
//     uniqueArr.includes(ele) ? null : uniqueArr.push(ele);
// })
// console.log(uniqueArr)

let uniqueArr = arr.reduce((acc, ele) => {
    if (!acc.includes(ele)) acc.push(ele);
    return acc;
}, []);

console.log(uniqueArr);

