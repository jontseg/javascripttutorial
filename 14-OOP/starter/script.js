'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const jonas = new Person('Jonas', 1991);

// Person.hey = function () {
//   console.log('Hey There!');
//   console.log(this);
// };

// Person.hey();
// // console.log(jonas);
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function returns {}

// // // console.log(jonas instanceof Person);

// Person.prototype.calcAge = function() {
//   console.log(2037 - this.birthYear);
//   this.age = 2037 - this.birthYear;
// };
// // // jonas.calcAge();
// // // console.log(jonas);

// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(jonas));

// // Person.prototype.species = 'Homo Sapiens';
// // console.log(jonas.species);

// // console.log(jonas.hasOwnProperty('firstName'));
// // console.log(jonas.hasOwnProperty('species'));

// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__.__proto__);

// // console.dir(Person.prototype.constructor);

// // const arr = [1,2,2,2,3,4,5]
// // // Array.prototype.unique = function() {
// // //  return [...new Set(this)]
// // // }

// // // console.log(arr.unique())

// // const h1 = document.querySelector('h1');

// ///////////////////////////////////////
// // Coding Challenge #1

// /*

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */
// // 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// // class Car {
// //   constructor(make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// //   }
// // }
// const Car = function(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// //

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }
// }
// // // 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;

// // // Car.prototype.accelerate = function() {
// // //   this.speed += 10;
// // //   console.log(this.speed);
// // // }
// // // // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// // // Car.prototype.brake = function() {
// // //   this.speed -= 5;
// // //   console.log(this.speed);
// // // }
// // // 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
// // const car1 = new Car('Toyota', 40);
// // const car2 = new Car('BMW', 100);
// // car1.accelerate();
// // car1.accelerate();
// // car2.brake();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     return 2037 - this.birthYear;
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
//   // static method
//   static hey() {
//     console.log('Hey There!');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// jessica.greet();
// console.log(jessica.age);
// jessica.fullName = 'Jessica Davis Junior';
// console.log(jessica.fullName);

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// PersonCl.hey();

// const PersonProto = {
//   calcAge() {
//     return console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;

// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1991);
// sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h
*/

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }

//   get speedUS() {
//     return this.speed/1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);
// ford.accelerate();

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function() {
//   console.log(2037 - this.birthYear);
// };

// const Student = function(firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// }

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function() {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const mike = new Student('Mike', 2020, 'Computer Science');

// mike.introduce();
// mike.calcAge();

///////////////////////////////////////
// Coding Challenge #3

/* 


DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function() {
//   this.speed += 20;
//   console.log(`Accelerated you are now at ${this.speed} km/h`);
// }

// Car.prototype.brake = function() {
//   this.speed -= 10;
//   console.log(`Braked you are now at ${this.speed} km/h`);
// }

// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);

// const EV = function(make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// }

// // 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function(chargeTo) {
//   this.charge = chargeTo;
//   console.log(`Finished Charging ${chargeTo}%`);
// }
// // 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// EV.prototype.accelerate = function() {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// }
// // 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
// const tesla = new EV('Tesla', 120, 23);
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(100);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     return 2037 - this.birthYear;
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
//   // static method
//   static hey() {
//     console.log('Hey There!');
//     console.log(this);
//   }
// }

// class Student extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
//   }
// }

// const jonas = new Student('Jonas Schmedman', 1991, 'JS');
// const john = new Student('John T', 1991, 'JS');
// jonas.introduce();
// jonas.calcAge();

// const PersonProto = {
//   calcAge() {
//     return console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// }

// StudentProto.introduce = function() {
//   console.log(`My name is ${this.firstName}`);
// }

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science')
// jay.introduce();

// Public Fields
// Private Fields
// Public methods
// Private methods
// Private methods

// Static version of these 4

// Encapulation: Private Class Fields and Methods
// class Account {
//   locale = navigator.language;
//   bank = 'Bankist';
//   #movements = [];
//   #pin;
//   #owner;

//   constructor(owner, currency, pin) {
//     this.#owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//   }

//   // Public Interface
//   getMovements() {
//     // Not chinable
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdrawal(val) {
//     this.deposit(-val);
//     return this;
//   }

//   #approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(250);
// acc1.withdrawal(140);
// acc1.requestLoan(100);
// const movement = acc1.deposit(100).withdrawal(50).deposit(1000).withdrawal(1000).getMovements();

// console.log(acc1);
// console.log(movement);

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  
  accelerate() {
    this.speed  += 20;
    this.#charge -= 1;
    console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    return this;
  }
}

// 'Rivian' going at 120 km/h, with a charge of 23%

const riv = new EVCl('Rivian', 120, 23);
riv.accelerate().chargeBattery(50).accelerate().accelerate().chargeBattery();