'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 109 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LAX123');
// createBooking('H123', 2, 1000);
// createBooking('L123', 5);
// createBooking('L123', undefined, 5);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmetmen',
//   passport: 237323902323,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 237323902323) {
//     alert('Check In');
//   } else {
//     alert('Wrong passport!');
//   }
// };
// // checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best', upperFirstWord);
// transformer('Javascript is the best', oneWord);

// const high5 = function() {
//   console.log('🖐️');
// }
// console.log(['Jonas', 'Martha', 'Adam'].forEach(high5));

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greetArr = greeting => name => {
//   return  console.log(`${greeting} ${name}`);

// }

// const greeterHey = greet('Hey');
// greeterHey('Jonas');

// const greeterHeyArr = greetArr('Hi');
// greeterHeyArr('Jon');

// const luft = {
//   airline: 'Luftansha',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight number ${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}`,
//     });
//   },
// };

// luft.book(999, 'Jonathan');
// luft.book(23, 'Azeb');
// console.log(luft.bookings);

// const book = luft.book;

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
//   book,
// };

// // eurowings.book(553, 'Jonas');

// // Call Method
// // Explicitly sets this keyword to object in first parameter
// book.call(eurowings, 554, 'Jonas');
// book.call(luft, 239, 'Mary Cooper');
// console.log(luft);

// const swiss = {
//   airline: 'Swiss Air Line',
//   iataCode: 'SX',
//   bookings: [],
// };

// book.call(swiss, 443, 'Adam Bridges');

// // Apply method
// const flightData = [583, 'George Cooper'];
// // book.apply(swiss, flightData);
// book.call(swiss, ...flightData);

// // bind method
// // Returns a new function where the this keyword is alwasys set to function argument
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(luft);
// const bookSX = book.bind(swiss);
// bookEW(23, 'Steven Adams');

// const bookEW23 = book.bind(eurowings, 23);

// bookEW23('JOJO');

// // With Event Listeners
// luft.planes = 300;
// luft.buyPlane = function () {
//   console.log('This: ', this);
//   this.planes++;
//   console.log(this.planes);
// };
// console.log(luft);

// document
//   .querySelector('.buy')
//   .addEventListener('click', luft.buyPlane.bind(luft));

// // Partial applicaiton
// // const addTax = (rate, value) => value + value * rate;

// // console.log(addTax(0.1, 200));

// // // create a function that returns a funciton like addVAT
// // const addVAT = addTax.bind(null, 0.23)

// // console.log(addVAT(100));

// // arrow
// const addTaxRate = rate => value => value + value * rate;

// // function dec
// const addTaxRate2 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT = addTaxRate(0.23);
// console.log(addVAT(100));
// const addVAT2 = addTaxRate2(0.23);
// console.log(addVAT2(100));



///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
//     answer >= 0 && answer <= this.answers.length && this.answers[answer]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array'){
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll  results are ${this.answers.join(', ')}`);
//     }
//   },
// }

// document.querySelector('.poll').addEventListener('click', 
//   poll.registerNewAnswer.bind(poll)
// );

// poll.displayResults.call({answers: [5, 2, 3]}, 'string')
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
  
//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.


// IFFE Immiedielty Invoked Function Expression
// const runOnce = function() {
//   console.log('This will never run again');
// }
// runOnce();

// (function() {
//   console.log('This will never run again');
// })

// (() => console.log('This will ALSO never run again'));

// Closures
// A closure is the closed over variable environment of the execution context in which a function was created, even after that execution context is gone

// A closure gives a function access to all the variables of its parent function, even after that parent function has returned. the function  keeps a reference to its outer scope, which preserves the scope chain throuhout time
// functions always have access to the variable environment withing thier execution context. Even if that execution context is gone.

// functions do not lose connection to variables created at their birth
// const secureBooking = function() {
//   let passengerCount = 0;
//   return function() {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   }
// }

// const booker = secureBooking();
// // console.log(booker());
// booker();
// booker();

// console.dir(booker);

// More Closures

// Example 1
// let f;

// const g = function() {
//   const a = 23;
//   f = function() {
//     console.log(a * 2);
//   }
// }
// g();
// f();

// const h = function() {
//   const b = 777;
//   f = function() {
//     console.log(b * 2);
//   }
// }
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function(n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function() {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// } 


// boardPassengers(180, 3);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function() {
    header.style.color = 'blue';
  })
})();