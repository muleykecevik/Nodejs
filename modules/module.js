'use strict'
console.log("This line from modules")

//?single function
/*
const testFunction = function () {
    console.log("This is function");
}
module.exports = testFunction
*/

module.exports = function () {
    console.log("This is function");
}
//multi function
// const testFunctionA = function () {
//     console.log('This is A function');
// }
// const testFunctionB = function () {
//     console.log('This is B function');
// }
// const testFunctionC = function () {
//     console.log('This is C function');
// }

// module.exports = [
//     testFunctionA,
//     testFunctionB,
//     testFunctionC,
// ]
//obj
// module.exports={
//     testFunctionA: testFunctionA,
//     testFunctionB:testFunctionB,
//     testFunctionC:testFunctionC,
//     pi:3.14
// }


// module.exports = {
//     testFunctionA,
//     testFunctionB,
//     testFunctionC,
//     pi: 3.14
// }


//tek seferde hem fonk yazip hem de export etme
//module.exports.testFunctionA = function () {
//     console.log('This is A function');
// }
// module.exports.testFunctionB = function () {
//     console.log('This is B function');
// }
// module.exports.testFunctionC = function () {
//     console.log('This is C function');

// }
// module.exports.pi = 3.14


//daha kisa yol - en cok bu kullanilacak
module.exports = {
    testFunctionA: function () {
        console.log('This is A function');
    },
    testFunctionB: function () {
        console.log('This is B function');
    },
    testFunctionC: function () {
        console.log('This is C function');
    },
    pi: 3.14
}