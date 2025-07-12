function FlattenNestedArray(arr, result) {
    arr.forEach(element => {
        if (Array.isArray(element)) {
            FlattenNestedArray(element, result);
        } else {
            result.push(element);
        }
    });

    return result;
}

console.log(FlattenNestedArray([1, [2, [3, 4], 5, 6], 7], []))