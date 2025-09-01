// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// console.log({} + {});
// let a = 1;
// let b = a++;
// console.log(a, b);
// console.log(typeof null);
// console.log(typeof NaN);
// console.log(typeof []);
// console.log(typeof {});

// let arr = [1, 2, 3];
// arr[10] = 99;
// console.log(arr.length);

// // for (var i = 0; i < 3; i++) {
// //     setTimeout(() => console.log(i), 100);
// // }

// // for (let i = 0; i < 3; i++) {
// //     setTimeout(() => console.log(i), 100);
// // }

// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(""));
// const obj = {
//     a: 10,
//     b: () => console.log(this.a)
// };
// obj.b();

// // let x = 10;
// // (function () {
// //     console.log(x);
// //     let x = 20;
// // })();

// console.log([1, 2] == "1,2");
// console.log([] == false);
// console.log(false == ![])
// console.log([] == ![]);


// let person = { name: "Dhruv" };
// const p1 = person;
// person = null;
// console.log(p1);

// // let person = { name: "Dhruv" };
// // const p1 = person;

// // person = { name: "Ajay" };
// // console.log(p1); // 👉 { name: "Dhruv" }
// // console.log(person); // 👉 { name: "Ajay" }



// console.log(typeof NaN);
// console.log(NaN === NaN);
// console.log(NaN == NaN);

// let x = 0;
// x++;
// ++x;
// console.log(x);

// console.log("5" - 2);
// console.log("5" + 2);
// console.log("5" * 2);
// console.log("5" / 2);

// let a1 = (3.1, 2.3, 4.2);
// console.log(a1);

// (() => {
//     let x1 = y1 = 10;
// })();
// console.log(typeof y1);
// console.log(typeof x1);

// console.log([] == ![]);


// let a3 = 5;
// (function () {
//     console.log(a3);
//     var a3 = 10;
// })();

// // let a2 = 5;
// // (function () {
// //     console.log(a2);
// //     let a2 = 10;
// // })();

// let x2 = "10";
// x2 = x2 - 1;
// console.log(x2);
// x2 = x2 + 1;
// console.log(x2);

// let x3 = true + false + true;
// console.log(x3);

// p = 10;
// console.log(p)
// var p = 20;
// console.log(p)

// foo();
// function foo() {
//     console.log("fun");
// }

// let a2 = 1;
// {
//     let a2 = 2;
//     {
//         console.log(a2);
//     }
// }

// console.log(1 + "2" + "2"); //122
// console.log(1 + +"2" + "2"); //32
// console.log(1 + -"1" + "2"); // 02
// console.log(+"1" + "1" + "2"); // 122
// console.log("A" - "B" + "2"); // NaN2
// console.log("A" - "B" + 2); // NaN

// // let x1 = 10;
// // (function () {
// //     console.log(x1);
// //     let x1 = 20;
// // })();
// console.log({} == {});
// console.log([] == []);


// console.log({} == {})
// console.log({} === {})

// console.log([] == [])
// console.log([] === [])

// console.log([1, 2] == [1, 2])

// function test() {
//     console.log(this);
// }
// test();

// function foo() {
//     return
//     {
//         message: "Hi"
//     };
// }
// console.log(foo());

// function foo2() {
//     return {
//         message: "Hi"
//     };
// }
// console.log(foo2());

// console.log(typeof NaN);
// console.log(isNaN("hello"));
// console.log("5" - - "2");

// console.log(Math.max());
// console.log(Math.min());

// console.log([...'hello']);

// let data = [1, 2, 3].map(num => {
//     if (num % 2 === 0) return 'yes';
//     return num;
// });
// console.log(data);

// function test(a, b, c) {
//     console.log(arguments[0], arguments[1], arguments[2]);
// }
// test(1, 2);

// console.log([] + []);
// console.log([] + {});
// console.log({} + []);

// console.log(!!null);
// console.log(!!"");
// console.log(!![]);

// console.log(false == '0');   // ❓
// console.log(false === '0');  // ❓

// let x4 = 10;
// let y4 = x4++ + ++x4;
// console.log(x4, y4);

// console.log({} + []);
// console.log("10" - "4" - "3" - 2 + "5");

// function one() {
//     two();
//     console.log("One");
// }

// function two() {
//     three();
//     console.log("Two");
// }

// function three() {
//     console.log("Three");
// }

// one();

// const user = {
//     name: "Dhruv",
//     greet: () => {
//         console.log(`Hello, ${this.name}`);
//     },
// };
// user.greet()

// // async function test() {
// //     return 1;
// // }
// // test().then(console.log);
// // test().then(data => { console.log(data) });

// // async function foo() {
// //     try {
// //         return await Promise.reject("Something went wrong");
// //     } catch (e) {
// //         return "Caught error: " + e;
// //     }
// // }

// // foo().then(console.log);


// // let a = 1;
// // {
// //     var a = 2;
// //     console.log(a);
// // }
// // console.log(a);

// const person1 = {
//     name: "patel",
//     greet: function () {
//         return `Hey, ${this.name}`;
//     },
// };

// const greetFunc = person1.greet;
// console.log(greetFunc());

// const name = "Dhruv";
// const message = `Welcome, ${name.toUpperCase()}!`;
// console.log(message);

// const obj2 = { a: 1, b: { c: 2 } };
// const clone = { ...obj2 };
// clone.a = 2;
// clone.b.c = 2;

// console.log(obj2.a, clone.a);
// console.log(obj2.b.c, clone.b.c);


// const sym = Symbol("secret");

// const user2 = {
//     name: "Dhruv",
//     [sym]: "hiddenValue"
// };

// console.log(user2.name);       // "Dhruv"
// console.log(user2[sym]);       // "hiddenValue"
// console.log(Object.keys(user2)); // ["name"] — symbol is not shown!


// class Vehicle {
//     constructor(type) {
//         this._type = type;
//     }

//     get type() {
//         console.log("get type")
//         return this._type.toUpperCase();
//     }

//     set type(val) {
//         console.log("set type")
//         this._type = val;
//     }
// }

// const v = new Vehicle("car");
// v.type = "bike";
// console.log(v.type);

// // var name2 = "test1";

// // function temp() {
// //     var name2 = "test";

// //     const user = {
// //         name2: "Dhruv",
// //         greet: () => {
// //             console.log(`Hello, ${this.name2}`);
// //         },
// //     };

// //     user.greet();
// // }

// // temp();

// var name2 = "Kano";
// const user3 = {
//     name2: "Dhruv",
//     greet: () => {
//         console.log(`Hello, ${this.name2}`);
//     },
// };
// user3.greet()

// setImmediate(() => {
//     console.log("setImmediate", new Date().getTime())
// })

// setTimeout(() => {
//     console.log("setTimeout", new Date().getTime())
// }, 1000);

// process.nextTick(() => {
//     console.log("process.nextTick", new Date().getTime())
// })

// let interval = setTimeout(() => {
//     console.log("hello");
// }, 3000);

// clearInterval(interval) // run before above code, so console not comes

// async function foo() {
//     return "hello world";
// }

// const result = foo();
// console.log(result)

// const result2 = await foo();
// console.log(result2)

// foo().then((e) => console.log(e));

// async function abc() {
//     let result = await foo();
//     console.log(result);
// }

// abc();

// {
//     let a = 1;
//     var b = 2;
//     console.log(a, b)
// }
// console.log(b)
// console.log(a)

// function abc(a, ...rest) {
//     console.log(a, rest)
// }
// abc(1, 2, 3, 4)

// let a = true ? console.log("Yes") : console.log("No");
// console.log(a)

// console.log(a)
// console.log(b)
// var a = b = 5;

// console.log(a)
// console.log(b)
// var a = 5, b = 5;

// var a = 5;
// console.log(a++)
// console.log(a)

// console.log(12 ** 12)
// function test() {
//     a = 1200;
//     console.log(a)
// }
// test()
// console.log(a)

// function test() {
//     console.log(test.a)
// }
// test()
// test.a = 200;
// test.a = 300;
// test()

// let a = 10;
// let b = new Number(10);
// let c = 10;
// console.log(a == b)
// console.log(a === b)
// console.log(typeof b)

// function test(para) {
//     if (para == { a: 10 }) {
//         console.log("a")
//     } else {
//         console.log("else")
//     }
// }

// test({ a: 10 })

// console.log(+true)
// console.log(!'test')

// var a = {};
// var b = { key: 'b' }
// var c = { key: 'c' }

// a[b] = 600;
// a[c] = 700;
// console.log(a[c])
// console.log(a[b])
// console.log(b[b])
// console.log(b[c])

// var a = {};
// var b = { key: 'b' }
// var c = { key: 'c' }

// const a = {};
// const b = {
//     name: 'dhruvil'
// }
// const c = {
//     name: 'kano'
// }

// a[b] = { name: 'abc' }
// a[c] = { name: 'cde' }

// console.log(a[b])

// a[b] = 600;
// b[c] = 700;
// b[b] = 400;
// console.log(a[c])
// console.log(a[b])
// console.log(b[b])
// console.log(b[c])
// console.log(a, b, c)

// how to empty array
// let arr = [4, 3, 9, 6, 7, 3, 2, 8, 1, 5];
// arr.length = 0;
// arr.splice(0)
// arr = []
// arr = arr.filter((e) => !e)
// while (arr.length) {
//     arr.pop()
// }
// while (arr.length) {
//     arr.shift()
// }

// console.log(arr)


// function abc(a, b, c) {
// }
// function pqr(p, q, r = 0) {
// }
// function xyz(x = 0, y, z = 0) {
// }
// console.log(abc.length, pqr.length, xyz.length)


// a = 10;
// console.log(++a)
// console.log(a++)
// console.log(a)

// console.log("abc" - 100)
// console.log("abc" + "100")
// console.log(2 + '2' + 2)
// console.log(2 + '2' - 2)


// console.log(+'abc')
// console.log(true * 2)

// let arr = [1, 2]
// // let a = arr.forEach((e) => e * 2)
// // console.log(a)
// let added = arr.unshift(0) // insert 0
// let removed = arr.shift(0) // remove 0
// console.log(arr, added, removed)


// var a = 200;
// {
//     var a = 400;
// }

// let b = a;
// {
//     let b = -400;
// }

// console.log(b)

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.some(e => e > 5))
// console.log(arr.every(e => e < 5))

// a = 100;
// console.log(a)

// let a;
// console.log(a)

// console.log("543", [1, 2, 3, 4] == '1,2,3,4')

// let abc = "abc";
// abc[2] = 3;
// console.log(abc[2])

// let arr = [1, 2, 3]
// let [y, z] = arr;
// console.log(y, z)

// console.log(null == undefined)

// const a = function abc() {
//     return "abc";
// }

// // var abc;
// console.log(a())

// let arr = [, , ,]
// console.log(arr.length)

// console.log([1, 2, 3].map((e) => {
//     if (e > 0) return;
//     return e * 10
// }))

// console.log([, , ,].length)

// let arr = [4, 3, 9, 6, 7, 3, 2, 8, 1, 5];
// arr.length = 0;
// arr.splice(0)
// arr = []
// arr = arr.filter((e) => !e)
// while (arr.length) {
//     arr.pop()
// }
// while (arr.length) {
//     arr.shift()
// }

// console.log(arr)