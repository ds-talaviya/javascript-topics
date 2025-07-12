function SortArray(arr) {
    // let n = arr.length - 1;
    // let swapped;
    // do {
    //     console.log(arr)
    //     swapped = false;
    //     for (let i = 0; i < n; i++) {
    //         if (arr[i] > arr[i + 1]) {
    //             let reserved = arr[i + 1];
    //             arr[i + 1] = arr[i];
    //             arr[i] = reserved;
    //             swapped = true;
    //         }
    //     }
    //     n--;
    // } while (swapped);
    // return arr;

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i; // conside initially first index has a smalles value

        // check all other elements with considered element
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                // we find a place of that element, by comparing all of rest elements
                minIndex = j;
            }
        }

        // if minIndex and consider index both are diff means we need to swap
        if (minIndex !== i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp
        }
    }
    return arr
}

console.log(SortArray([4, 3, 9, 6, 7, 3, 2, 8, 1, 5]));