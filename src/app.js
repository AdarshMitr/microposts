// // Common JS module Syntax
// const person=require('./mymodule1');
// console.log(person.name);


//ES2015 Module
//import { person,sayHello } from "./mymodule2";
// console.log(person.name);
// console.log(sayHello());

// import * as mod from './mymodule2';
// console.log(mod.person.name);
// console.log(mod.sayHello());

import greeting from "./mymodule2";
console.log(greeting);