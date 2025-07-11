const result = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
        result.push(i);
    }
}

console.log(result.length);
