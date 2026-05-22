const user = {
    name: "dhruvil",
    gender: "male"
}
// Object.freeze(user);
// user.name = "car"; // it will not update name value as object is freeze
// console.log(user);

// user.age = 24;
// console.log(user);

// delete user.name;
// console.log(user);



// Object.preventExtensions(user);
// user.name = "car";
// console.log(user);

// user.age = 24; // you can't extend object
// console.log(user);

// delete user.name;
// console.log(user);

Object.seal(user);
user.name = "car";
console.log(user);

user.age = 24; // you can't extend object
console.log(user);

delete user.name; // yo can't delete
console.log(user);