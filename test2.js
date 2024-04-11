const user = {
    name: "dhruvil"
}
Object.freeze(user);
user.name = "car"; // it will not update name value as object is freeze
console.log(user);

user.age = 24;
console.log(user);

delete user.name;
console.log(user);