'use-strict';

// 1. Write a function findItem(array, itemToFind), which will return the item if the item is found in the array, otherwise null
console.log('-------Question 1:-------');

function findItem(array, itemTofind) {
  return (array.includes(itemTofind) && itemTofind) || null;
}
const arr = [1, 2, 3];
console.log(`Array: ${arr}`);
console.log(`findItem(arr, 4) = ${findItem(arr, 4)}`);
console.log(`findItem(arr, 3) = ${findItem(arr, 3)}`);

// 2. Write a function named printStarts(maxStars) which will take a number and print star patterns (like the example). For example, if maxStars = 4, then it would print the following in the console:
console.log('-------Question 2:-------');

function printStars(maxStars) {
  for (let i = maxStars; i > 0; i--) {
    console.log('*'.repeat(i));
  }
}
console.log('printStars(3):');
printStars(3);

// 3. Write a function named calculateBMI(weight, height) which will calculate BMI index based on the inputs. The weight will be in Kg (Kilograms) and height will be in string. So one example call is like this calculateBMI(60, “5.4”) - it means the weight is 60kg and height is 5 feet 4 inches. The function should return the BMI index
console.log('-------Question 3:-------');

function calculateBMI(weight, height) {
  const feet = Number(height.split('.')[0]);
  const inches = Number(height.split('.')[1]);
  const heightMeters = (feet * 12 + inches) * 0.0254;
  return weight / (heightMeters * heightMeters);
}

console.log(calculateBMI(60, '5.4'));

// 4. Create a JS object named “aboutMe”, which would contain information as follows
// aboutMe = { name: ‘X’, age: 20, hobbies: [‘Singing’, ‘Reading’] … }
// It should contain informations such as name (string), age (integer), hobbies (array of string). It should also contain address field and there should be ‘present’ and ‘permanent’ address. There should also be an ‘experiences’ field where you will list the companies you worked for. Each experience object would have ‘companyName’, ‘designation’ and ‘year’.

console.log('-------Question 4:-------');

const aboutMe = {
  name: 'Jon',
  age: 29,
  hobbies: ['Singing', 'Reading', 'Video Games', 'Coding'],
  address: {
    present: "123 Hillock Place",
    permanent: "321 Big Barn Road"
  },
  experiance: [
    {
      companyName: 'TechinSF',
      designation: 'Senior IT Consultant',
      year: '2030'
    },
    {
      companyName: 'UCSB',
      designation: 'IT Intern',
      year: '2020'
    },
    {
      companyName: 'Restaurant',
      designation: 'Busser',
      year: '2010'
    }
  ],
  introduce() {
    console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old. My present address is ${this.address.present} and my permanant address is ${this.address.permanent}. I have experiance working at ${this.experiance.length} different companies in my lifetime. My hobbies are ${this.hobbies[0]}, ${this.hobbies[1]}, ${this.hobbies[2]}, and ${this.hobbies[3]}`);
  }
}

aboutMe.introduce();

// 5. Create a function named getGrade(marks) which would take students’ marks and return the achieved grading based on the mark (A, B, C) etc.

console.log('-------Question 5:-------');

function getGrade(marks) {
  // if chain
  if (marks < 60){
    return 'F';
  }
  if (marks < 70) {
    return 'D';
  }
  if (marks < 80){
    return 'C';
  }
  if (marks < 90){
    return 'B'
  }
  return 'A';

  // switch version
  // switch(true){
  //   case (marks < 60): return 'F';
  //   case (marks < 70): return 'D';
  //   case (marks < 80): return 'C';
  //   case (marks < 90): return 'B';
  //   default: return 'A';
  // }
}

console.log(getGrade(98));

// 6. Create a function named calculateAge(birthYear) which would return your age. The current time should not be hardcoded and must be determined dynamically

console.log('-------Question 6:-------');

function calculateAge(birthYear) {
  const today = new Date().getFullYear()
  return  today - birthYear;
}
console.log(calculateAge(1996));

// 7. Create a program that would print out the lyrics of the well-known song 99 bottles of beer: https://www.99-bottles-of-beer.net/lyrics.html 

function bottles() {
  const totalBottles = 99;
  for (let i = totalBottles; i > 0; i--){
  console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.
  Take one down and pass it around, ${i > 1 ? i-1 : 'no more'} bottles of beer on the wall.`)
  }
  console.log(`No more bottles of beer on the wall, no more bottle so fbeer.
    Go to to the store and buy some more, ${totalBottles} bottles of beer on the wall`
  );
}

bottles();