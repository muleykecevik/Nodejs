'use strict'
console.log("This line")
//single function
const testFunction = function () {
    console.log('This is function')
}
module.exports = testFunction

//multi function
const testFunctionA = function () {
    console.log('This is A function');
}
const testFunctionB = function () {
    console.log('This is B function');
}
const testFunctionC = function () {
    console.log('This is C function');
}

module.exports = [
    testFunctionA,
    testFunctionB,
    testFunctionC,
]
