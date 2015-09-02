/*
Prototypal Inheritance using alternative methods
*/

var a = {};
console.log(a.prototype); // undefined
console.log(a.__proto__); // object Object
console.log(a.constructor.prototype); // object Object

a.__proto__ = Array.prototype;

console.log(a.length); // 0