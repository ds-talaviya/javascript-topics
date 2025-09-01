// --------------------------------------- laxical scope --------------------------------------
// an inner(child) function can access propeties of outer(parent) function called laxical scope
// function parent() {
//     let name = "Dhruvil";
//     function child() {
//         console.log(name)
//     }
//     child();
// }
// parent()

// --------------------------------------- closure --------------------------------------
// parent function return a function, which called latter so that it's closure
// function parent() {
//     let name = "Dhruvil";
//     return function child() {
//         console.log(name)
//     }
// }
// let resp = parent()
// resp();