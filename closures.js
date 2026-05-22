function xyz() {
    let name = "xyz";
    function abc() {
        console.log(name)
    }
    name = "abc";
    abc();
}
xyz();

function func1(a1) {
    return function func2(a2) {
        console.log("total is", a1 + a2)
    }
}

const a = func1(1);
a(2)