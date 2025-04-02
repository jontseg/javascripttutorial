"use strict";
// Creates visual errors that are usually hidde

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive!")

// function logger() {
//   console.log("My name is Jon!");
// }

// logger();

// Funciton declaration
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(5, 0));

// Function expression
// const calcAge2 = function (birthYear)  {
//     return 2037 - birthYear
// }

// const age = calcAge2(1991)
// console.log(age)

// Arrow Functions
const calcAge3 = (birthYear) => 2037 - birthYear;

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log("Age: ", calcAge3(1991))
// console.log(yearsUntilRetirement(1991, "Joe"))

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     cutFruitPieces(apples)
// }

// const friend1 = "Micheal";
// const friend2 = "Steven";
// const frined3 = "Peter";

// const friends = ["Micheal", "Steven", "Peter"];

// friends.unshift("John")
// friends.splice(0,1)
// console.log(friends.includes("Steven"))
// console.log(friends)
// const years = new Array(1991, 1984, 2000, 2020);

// const ages = []
// for (let i = 0; i < years.length; i++) {
//     ages.push(calcAge3(years[i]))
// }
// console.log(ages)

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmetmmann",
//   job: "teacher",
//   friends: ["Micheal", "Peter", "Steven"],
// };

// // console.log(jonas)
// // console.log(jonas.firstName)
// // console.log(jonas['firstName'])

// const nameKey = "Name";

// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt("What do you want to know bout Jonas");

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// }
// jonas.location = 'Portugal'
// jonas['twitter'] = '@jonassschmentt'

// // Challenge
// // Jonas has 3 friends, and his best friend is called Micheal
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

const jonas = {
  firstName: "Jonas",
  lastName: "Schmetmmann",
  job: "teacher",
  birthYear: 1991,
  friends: ["Micheal", "Peter", "Steven"],
  hasDriversLicense: false,
  // calcAge: function(birthYear) {
  //     return 2037 - birthYear
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  bestFriend: function () {
    this.bestFriend = this.friends[0];
    return this.bestFriend;
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.age}-year old ${this.job}, and he ${this.hasDriversLicense ? "has" : "doesn't have"} a driver's license`
  }
};

console.log(jonas.calcAge());
console.log(jonas.bestFriend());
console.log(jonas.getSummary())