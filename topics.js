const fs = require('fs')
// --------------------------------------- laxical scope --------------------------------------
// an inner(child) function can access propeties of outer(parent) function called laxical scope
function parent() {
    let name = "Dhruvil";
    function child() {
        console.log(name)
    }
    child();
}
// parent()

// --------------------------------------- closure --------------------------------------
// parent function return a function, which called latter so that it's closure
function parent() {
    let name = "Dhruvil";
    return function child() {
        console.log(name)
    }
}
// let resp = parent()
// resp();

// --------------------------------------- currying --------------------------------------
// Currying is a technique where a function that normally takes multiple arguments is transformed into a sequence of functions, each taking one argument at a time.
// below code is perfect example of currying, closure, higher order function, lower order function, and lexical scope
// Higher - order function = returns another function or takes function as argument.
// Closure = inner function retains access to outer function’s variables.
// Lexical scope ensures that b and c can “see” a and b.
function a(a) {
    return function b(b) {
        return function c(c) {
            return a + b + c;
        }
    }
}

// let a1 = a(1);
// console.log(a1)
// let result = a(1)(2)(3);
// console.log(result)

// --------------------------------------- callbacks --------------------------------------

function parent(name, surname, callback) {
    console.log(name);
    callback(surname);
}

function child(surname) {
    console.log(surname)
}

// parent('dhruvil', 'talaviya', child)

// --------------------------------------- callback hell--------------------------------------

function a(num, callback) {
    console.log("a");
    callback(num + 1);
}
function b(num, callback) {
    console.log("b");
    callback(num + 1);
}
function c(num, callback) {
    console.log("c");
    callback(num + 1);
}
function d(num, callback) {
    console.log("d");
    callback(num + 1);
}

// a(1, (resp1) => {
//     b(resp1, (resp2) => {
//         c(resp2, (resp3) => {
//             d(resp3, (resp4) => { console.log(resp4) })
//         })
//     })
// })

// ------------------------------------- sultions of callback hell--------------------------------------
// 1. by promise
function a1(num) {
    console.log("a1");
    return Promise.resolve(num + 1);
}

function b1(num) {
    console.log("b1");
    // return Promise.reject(num + 1);
    return Promise.resolve(num + 1);
}

function c1(num) {
    console.log("c1");
    return Promise.resolve(num + 1);
}

function d1(num) {
    console.log("d1");
    return Promise.resolve(num + 1);
}

// a1(1)
//     .then(resp1 => b1(resp1))
//     .then(resp2 => c1(resp2))
//     .then(resp3 => d1(resp3))
//     .then(resp4 => console.log(resp4))
//     .catch(e => console.error(e))

// 2. by async await
function a2(num) {
    console.log("a2")
    return num + 1
}

function b2(num) {
    console.log("b2")
    // throw new Error('num + 1')
    return num + 1
}

function c2(num) {
    console.log("c2")
    return num + 1
}

function d2(num) {
    console.log("d2")
    return num + 1
}

async function myFunc() {
    try {
        let resp1 = await a2(1);
        let resp2 = await b2(resp1);
        let resp3 = await c2(resp2);
        let resp4 = await d2(resp3);
        console.log(resp4)
    } catch (e) {
        console.error(e)
    }
}

// myFunc();


// ------------------------------------- IIFE Immediatly invoked Function Expression --------------------------------------

// (function () {
//     console.log("called")
// })(); //calling function here

// (function (i) {
//     console.log("called", i)
// })(5);

// ------------------------------------------------ this keyeword --------------------------------------

// // this refer to user object
// const user = {
//     name: 'Dhruvil',
//     age: 25,
//     getDetails: function () {
//         return `${this.name} ${this.age}`
//     }
// }

// console.log(user.getDetails())

// // this refer to global object (in browser- window object, in node- {})
// console.log(this)

// // this refer to me object
// const me = {
//     getDetails: function () {
//         return this
//     }
// }
// console.log(me.getDetails())

// // this with arrow function
// const me2 = {
//     getDetails: () => {
//         return this
//     }
// }
// console.log(me2.getDetails())

// // in constructor
// function _constructor(name) {
//     this.name = name;
// }
// let obj = new _constructor('abc');
// console.log(obj.name)

// // in class
// class myClass {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log("my name is ", this.name)
//     }
// }
// let obj2 = new myClass('Dhruvil')
// obj2.greet()

// const axy = {
//     abc: this
// }
// console.log(axy.abc)


// ------------------------------------------------ call, apply, bind  --------------------------------------

// const person = { name: 'Dhruvil' };
// function greet(greeting, punctuation) {
//     console.log(`${greeting}, ${this.name}${punctuation}`);
// }
// greet.call(person, 'Hello', '!'); // Hello, Dhruvil!
// greet.apply(person, ['Hello', '!']); // Hello, Dhruvil!
// let greetDhruvil = greet.bind(person, 'Hello');
// greetDhruvil('!')


// ------------------------------------- process.nextTick(), setTimeout(), setInterval()  --------------------------------------
// process.nextTick always call first
// process.nextTick(() => {
//     console.log("nextTick")
// })

// // setTimeout & setImmediate sequence is not fixed
// setTimeout(() => {
//     console.log("setTimeout")
// }, 0);

// setImmediate(() => {
//     console.log("setImmediate")
// })

// // but if you do IO operation always setImmediate call before setTimeout
// fs.readFile('dummy.txt', () => {
//     setTimeout(() => {
//         console.log("setTimeout 2")
//     }, 0);

//     setImmediate(() => {
//         console.log("setImmediate 2")
//     })
// })

// ------------------------------------- oops concept ---------------------------------------------

// object: store (collection) key value pair data
const obj = {
    name: 'Dhruvil',
    greet: function () {
        console.log("hello my name is ", this.name);
    }
}
// obj.greet()



// class: template of object
class myClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("hello my name is", this.name, ", my age is", this.age);
    }
}
const myObj = new myClass("Dhruvil", 25);
// myObj.greet();



// inheritance: creating class by extending from another class
class myClass2 extends myClass {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }
    about() {
        console.log('my name is', this.name, 'age is', this.age, 'gender is', this.gender);
    }
}

const myObj2 = new myClass2('Dhruvil', 25, 'Male');
// myObj2.greet(); // myClass method
// myObj2.about();



// encapsulation: hiding the internal details of an object, and exposing only necessary part
// also use for prevent accidental modification
// abstraction
// Abstraction is the concept of hiding the internal implementation details and showing only the needed functionality to the user.

class bankAccount {
    #balance; // Encapsulation → private, hidden from outside

    constructor(intialBalance) {
        this.#balance = intialBalance;
    }

    // Abstraction → only exposing what user needs
    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new bankAccount(1000);
// Abstraction in action: user interacts only via methods
// acc.#balance // can't access gives error

// Abstraction in action: user interacts only via methods
acc.deposit(100);
console.log(acc.getBalance());

// Encapsulation
// #balance is private; access via methods
// Hides internal data, bundles data & methods
// Encapsulation → your money is inside a bank vault(hidden & protected).

// Abstraction
// deposit(), withdraw(), getBalance()
// Shows only necessary functionality to user
// Abstraction → you interact only via ATM functions like deposit / withdraw(don’t see vault internals).


// polymorphism: allow same mothods to behave differently based on object
// It allows a mthod to have diff implementation in derived classes
class Animal {
    speak() {
        console.log("speaking")
    }
}

class Dog extends Animal {
    speak() {
        console.log("Barking")
    }
}

class Lion extends Animal {
    speak() {
        console.log("Roaring")
    }
}

const myPet = new Animal();
myPet.speak();

const myDog = new Dog();
myDog.speak();

const lionKing = new Lion();
lionKing.speak();




//---------------------------------------- prototype ---------------------------------------------------------------
// every object has hidden property called prototype, Prototype is another object from which properties and methods can be inherited.
function person(name, age) {
    this.name = name;
    this.age = age;
}
person.prototype.greet = function () {
    console.log(">> my name is", this.name, "age is", this.age)
}

const person1 = new person('Dhruvil', 25)
person1.greet();

// same working by class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(">> my name is", this.name, "age is", this.age)
    }
}
const person2 = new Person('Dhruvil', 25)
person2.greet();


// console.log(typeof Person)
// console.log(typeof person2)