let arr = ['o', 'n', 'a', 'k'];
let arr2 = arr.reduce((c, v) => c + v);
console.log("reduce", arr2)
let arr3 = arr.reduceRight((c, v) => c + v);
console.log("reduceRight", arr3)
