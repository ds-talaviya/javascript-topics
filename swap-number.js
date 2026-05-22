function swapNumber() {
    let a = 11;
    let b = 12;
    // [a, b] = [b, a]
    // console.log(a, b)

    // b = a + b;
    // a = b - a;
    // b = b - a;
    // console.log(a, b)

    // a = a + b;
    // b = a - b;
    // a = a - b;
    // console.log(a, b)

    a = a ^ b;  // XOR
    console.log(a, b)
    b = a ^ b;
    console.log(a, b)
    a = a ^ b;
    console.log(a, b)
}

swapNumber()