'use strict'
console.log("hello FS15");
require('./modules/module')

//default olarak index.js arar
require('./modules/')

//single function call
//const testSingleFunction = require('./modules/module')
//testSingleFunction

//multi function
// const [test1, test2, test3] = require('./modules/module')
// test1()
// test2()
// test3()



const { testFunctionA, testFunctionB, testFunctionC, pi } = require('./modules/module')
testFunctionA()
testFunctionB()
testFunctionC()
console.log(pi);

//require('http') //once proje klasoru sonra globale ortama bakar
//require('node:http')

require('dotenv').config()
console.log(process.env.PORT); //env dosyasinin icerigini process env ye aktarir
console.log(process.env.HOST); // bu sekilde env deki degiskeneleri kullanabiliyoruz
console.log(process.env.SAMPLE_TEXT);