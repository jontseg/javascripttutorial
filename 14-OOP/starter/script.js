'use strict';

const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear

  // never create method in constructor function
  // this.calcAge = function() {
  //   console.log();
  // }
} 
const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function returns {} 



// console.log(jonas instanceof Person);

Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear);
  this.age = 2037 - this.birthYear;
};
// jonas.calcAge();
// console.log(jonas);


console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));