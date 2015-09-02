/*
Prototypal Inheritance using Constructor method
*/

var Mammal = function(){
  this.breath = function(){
		console.log('inhale and exhale');
	}
}

var Cat = function(name){
  this.name = name;
  
  this.get_name = function(){
    console.log('my name is ' + name);
  }
  
  this.speak = function(){
    console.log('I want lasagna');
  }
}

Cat.prototype = new Mammal();

var garfield = new Cat('Garfield');

garfield.speak() // I want lasagna
garfield.breath() // inhald and exhale
garfield.get_name() // my name is Garfield

/*
Prototypal Inheritance using alternative methods
*/

var a = {};
console.log(a.prototype); // undefined
console.log(a.__proto__); // object Object
console.log(a.constructor.prototype); // object Object

a.__proto__ = Array.prototype;

console.log(a.length); // 0

/*
Sample answer to student exercise
*/
var Person = function(){
  this.get_name = function(){
    console.log('my name is ' + this.name);
  }
}

var Programmer = function(name){
  this.name = name;
  
  this.profession = 'engineer'
  
  this.get_job = function(){
    console.log('I am an ' + this.profession)
  }
}

Programmer.prototype = new Person();

var jim = new Programmer('Jim');

jim.get_job() // I am an engineer
jim.get_name() // my name is Jim

