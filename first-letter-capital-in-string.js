let str = "hii i am dhruvil";
// let strArr = str.split(" ");
// let result = "";
// strArr.forEach((e) => {
//     for (let i = 0; i < e.length; i++) {
//         if (i == 0) {
//             result += e[i].toUpperCase();
//         } else {
//             result += e[i];
//         }
//     }
//     result += " ";
// })

// console.log(result)

// let result = str.split(" ").map((e) => e[0].toUpperCase() + e.slice(1)).join(' ');
let result = str.split(" ").map((e) => e[0].toUpperCase() + e.substring(1)).join(' ');
console.log(result)