let flat = [1, 2, 3, , [4, 5]];
console.log("flat.flat()", flat.flat())

let flat2 = [1, 2, 3, , [4, 5, [6]]];
console.log("flat2.flat()", flat2.flat())
console.log("flat2.flat(1)", flat2.flat(1))
console.log("flat2.flat(2)", flat2.flat(2))

let flat3 = [1, 2, 3, , [4, 5, [6], [7, [8, [9, [10]]]]]];
console.log("flat3.flat()", flat3.flat())
console.log("flat3.flat(1)", flat3.flat(1))
console.log("flat3.flat(2)", flat3.flat(2))
console.log("flat3.flat(3)", flat3.flat(3))
console.log("flat3.flat(Infinity)", flat3.flat(Infinity))

let flat4 = [1, 2,[[[[[[[[[3]]]]]]]]]];
console.log("flat4.flat()", flat4.flat(Infinity))