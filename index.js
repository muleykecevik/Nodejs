'use strict'
console.log("hello FS15")
require('./modules/module')
require('./modules/')

const testSingleFunction = require('./modules/module')
testSingleFunction()

//multi function
const [test1, test2, test3] = require('./modules/module')
test1()
test2()
test3()