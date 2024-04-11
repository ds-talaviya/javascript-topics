let arr = ['welcome to', 'my channel', 'mugembo khush hua', '😂']

arr = arr.map((e) => e.split(' '));
console.log("after split (' ') by map method", arr);
arr = arr.flat();
console.log("after applied flat method", arr);

let arr2 = ['welcome to', 'my channel', 'mugembo khush hua', '😂']
arr2 = arr2.flatMap((e) => e.split(' '))
console.log("after applied flatMap method with split", arr2);
