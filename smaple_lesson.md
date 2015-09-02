General Assembly Sample Teach Lesson Plan

### Learning Objectives
• Demonstrate a use case that explains prototypal inheritance and what kind of flexibility it gives to programmers
• Use namespaces to organize application code
• Define a custom constructor method that sets one or more
properties of a new object

| **Section** | **Timing** | **Description**                                                         |
|-------------|------------|-------------------------------------------------------------------------|
| Opening     | 1 - 2 min  | overview of topic                                                       | 
| I Do        | 3 - 4 min  | Prototypal inheritance using Constructor                                |
| We do       | 5 min      | Students write their own constructor methods with Prototype/Inheritance |
| Closing     | 5 min      | Feedbacks, remarks, questions, etc

### Student Pre Work

Student should have knowledge of Ruby objects and Ruby OOP practices, they should have experience creating Javascipt functions, variables, and objects

### Materials

For presentation there will be a few Powerpoint slides, all the codes can be found in separate .js and .rb files. 

-----------------------------------------------------------------------------------------------------

### Lesson Outline

## Opening: overview of topic: 1 - 2 minutes

**Question:** "What is an object in Ruby?"

**Answer**
Objects are instances of classes in Ruby

**Example**

```ruby
class Mammal  
  def breathe  
    puts "inhale and exhale"  
  end  
end  
  
class Cat < Mammal  
  def speak  
    puts "Meow"  
  end  
end  

garfield = Cat.new  
garfield.breathe  
garfield.speak  
```
## I Do: Prototypal inheritance using Constructor

**Question:** "What is an object in Javascript"

**Answer**
An object in JavaScript is any unordered collection of key-value pairs. If it’s not a primitive (undefined, null, boolean, number or string) it’s an object. (Emphasis on there being multiple ways of defining an object)

**Question:** "What is prototypal inheritance in Javascript?"

**Answer**
Javascript objects can inherit properties directly from other objects by using the hidden prototype every object has. This is very different from classical, where a sub-class (Cat) inherits from a super-class (Mammal)

**Example using a Constructor method**

```js
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
```

**Advanced question**: 'Is this the only way to create prototypal inheritance?'

**Answer (if time permits)**
Prototypal inheritance can be created with a number of syntax. This is one of the short comings of Javascript since its syntax often doesn't reflect its prototypal nature

**Example**

```js
var a = {}
console.log(a.prototype)
console.log(a.__proto__)
console.log(a.constructor.prototype)

a.__proto__ = Array.prototype

console.log(a.length)
```

## We Do: Using Constructor method to create Prototypal Inheritance

####Directions to students:

Write a `Person` object with a member function `get_name()` and a `Programmar` object that requires a name on creation. Then create an specific object named `jim` that results in the following:  

```js
var jim = new Programmer('Jim');
jim.get_job() // I am an engineer
jim.get_name() // my name is Jim
```

**Sample Result**

```js
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
```


