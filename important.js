console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log({} + {});
let a = 1;
let b = a++;
console.log(a, b);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof []);
console.log(typeof {});

let arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100);
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100);
// }

console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(""));
const obj = {
    a: 10,
    b: () => console.log(this.a)
};
obj.b();

// let x = 10;
// (function () {
//     console.log(x);
//     let x = 20;
// })();

console.log([1, 2] == "1,2");
console.log([] == false);
console.log([] == ![]);

let person = { name: "Dhruv" };
const p1 = person;
person = null;
console.log(p1);

// let person = { name: "Dhruv" };
// const p1 = person;

// person = { name: "Ajay" };
// console.log(p1); // 👉 { name: "Dhruv" }
// console.log(person); // 👉 { name: "Ajay" }



console.log(typeof NaN);
console.log(NaN === NaN);

let x = 0;
x++;
++x;
console.log(x);

console.log("5" - 2);
console.log("5" + 2);
console.log("5" * 2);
console.log("5" / 2);

let a1 = (3.1, 2.3, 4.2);
console.log(a1);

(() => {
    let x1 = y1 = 10;
})();
console.log(typeof y1);
console.log(typeof x1);

console.log([] == ![]);


let a3 = 5;
(function () {
    console.log(a3);
    var a3 = 10;
})();

// let a2 = 5;
// (function () {
//     console.log(a2);
//     let a2 = 10;
// })();

let x2 = "10";
x2 = x2 - 1;
console.log(x2);
x2 = x2 + 1;
console.log(x2);

let x3 = true + false + true;
console.log(x3);

p = 10;
console.log(p)
var p = 20;
console.log(p)

foo();
function foo() {
    console.log("fun");
}

let a2 = 1;
{
    let a2 = 2;
    {
        console.log(a2);
    }
}

console.log(1 + "2" + "2"); //122
console.log(1 + +"2" + "2"); //32
console.log(1 + -"1" + "2"); // 02
console.log(+"1" + "1" + "2"); // 122
console.log("A" - "B" + "2"); // NaN2
console.log("A" - "B" + 2); // NaN

// let x1 = 10;
// (function () {
//     console.log(x1);
//     let x1 = 20;
// })();
console.log({} == {});
console.log([] == []);

console.log([1, 2] == [1, 2])

function test() {
    console.log(this);
}
test();

function foo() {
    return
    {
        message: "Hi"
    };
}
console.log(foo());

function foo2() {
    return {
        message: "Hi"
    };
}
console.log(foo2());

console.log(typeof NaN);
console.log(isNaN("hello"));
console.log("5" - - "2");

console.log(Math.max());
console.log(Math.min());

console.log([...'hello']);

let data = [1, 2, 3].map(num => {
    if (num % 2 === 0) return 'yes';
    return num;
});
console.log(data);

function test(a, b, c) {
    console.log(arguments[0], arguments[1], arguments[2]);
}
test(1, 2);

console.log([] + []);
console.log([] + {});
console.log({} + []);

console.log(!!null);
console.log(!!"");
console.log(!![]);

console.log(false == '0');   // ❓
console.log(false === '0');  // ❓

let x4 = 10;
let y4 = x4++ + ++x4;
console.log(x4, y4);

console.log({} + []);
console.log("10" - "4" - "3" - 2 + "5");