const user = {
    name: "dhruvil"
}
Object.freeze(user)
user.name = "car" // it will not update name value as object is freeze

console.log(user)