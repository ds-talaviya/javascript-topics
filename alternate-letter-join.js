let str1 = "12345";
let str2 = "Vraj";

let length = str1.length > str2.length ? str1.length : str2.length;
let result = "";
for (let i = 0; i < length; i++) {
    str1[i] ? result += str1[i] : '';
    str2[i] ? result += str2[i] : '';
}
console.log(result)