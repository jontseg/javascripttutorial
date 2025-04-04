'use strict';

// console.log('global this: ', this);

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    // console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

// Shallow Copy
const jonasCopy = { ...jonas };

const array = [1, 2, 3];
const arrCopy = [...array];
console.log(jonasCopy);
console.log(arrCopy);

// Deep Copy
const jonasDeepCopy = structuredClone(jonas);
