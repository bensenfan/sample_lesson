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

