const _ = require("lodash")
// let array1 = [ 
//     {id: 2, name: "HSBC", status: "YES"},
//     {id: 3, name: "Morgan Stanley", status: "Pending"}
//   ]

// let array2 = [
//     {id: 1, name: "Deutsche Bank", category: "EQUITIES"},
//     {id: 2, name: "HSBC", category: "EQUITIES"},
//     {id: 3, name: "Morgan Stanley", category: "EQUITIES"},
//     {id: 4, name: "Credit Suisse", category: "EQUITIES"},
//  ]
// // returns { name, status } recoreds from any number of arrays
// function getBrokersDataFromArrays(...arrays) {
//     const allBrokers = new Map();
//     // collect all the available data for all the brokers
//     console.log(arrays)
//     arrays.flat().forEach(broker => {
//         console.log(broker)
//       if (allBrokers.has(broker.name)) {
//         allBrokers.set(broker.name, { ...allBrokers.get(broker.name), ...broker });
//       } else {
//         allBrokers.set(broker.name, broker);
//       }
//     });
//     // return only { name, status } fields from the collected brokers
//     return Array.from(allBrokers.values()).map(broker => (
//       { name: broker.name, status: broker.status }
//     ));
//   }

//   const brokersData = getBrokersDataFromArrays(array1, array2);

//   console.log(brokersData);
//   [
//     { name: 'HSBC', status: 'YES' },
//     { name: 'Morgan Stanley', status: 'Pending' },
//     { name: 'Deutsche Bank', status: undefined },
//     { name: 'Credit Suisse', status: undefined }
//   ]
// const fs = require('fs')
// const files = fs.readdirSync('C:/Users/DHRUVIL TALAVIYA/Downloads')
// let a = 0
// for (const file of files) {
//   let index1 = file.indexOf('Sankat Mochan Mahabali Hanuman')
//   let index2 = -1;
//   let name1;
//   let name2;
//   if (index1 == -1) {
//     index2 = file.indexOf('Sankat Mochan Mahabali Hanumaan')
//   }
//   if (index1 && index1 !== -1) {
//     name1 = "Episode" + file.substring(index1 + ("Sankat Mochan Mahabali Hanuman").length, file.length)
//   }
//   if (index2 && index2 !== -1) {
//     name2 = "Episode" + file.substring(index2 + ("Sankat Mochan Mahabali Hanumaan").length, file.length)
//   }
//   if (name1) {
//     fs.renameSync('C:/Users/DHRUVIL TALAVIYA/Downloads/' + file, 'C:/Users/DHRUVIL TALAVIYA/Downloads/sankat-mochan-hanuman/' + name1)
//   }
//   if (name2) {
//     fs.renameSync('C:/Users/DHRUVIL TALAVIYA/Downloads/' + file, 'C:/Users/DHRUVIL TALAVIYA/Downloads/sankat-mochan-hanuman/' + name2)
//   }
// }


var text = "azertyazerty";
let r = text.replace(new RegExp("az", "g"), "qu")
console.log("r", r)

var main = function (callback) {
    console.log('I am the main method, I call the first callback');
    callback();
};

var someCallback = function () {
    console.log('I am a callback who calls another fucntion');
    regularFunction();
}

var regularFunction = function () {
    console.log('I am a normal function called by a callback');
};

main(someCallback); 