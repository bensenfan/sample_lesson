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
EXERCISE

Write two constructors, Person and Programmer, that results
in the following 
*/

var jim = new Programmer('Jim');
jim.get_job() // I am an engineer
jim.get_name() // my name is Jim
