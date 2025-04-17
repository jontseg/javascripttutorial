'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">$${Math.abs(mov)}</div>
      </div>
    `;
    // console.log("here");
    // console.log(containerMovements);
    containerMovements.insertAdjacentHTML('afterBegin', html);
  });
};

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// displayMovements(account1.movements);

const user = 'Steven Thomas Williams'; // stw

const createUsernames = function (accs) {
  // console.log('Creating Usernames');
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(` `)
      .map(name => name[0])
      .join('');
  });
};

const initAccounts = function (accs) {
  createUsernames(accs);
  // createBalances(accs)
};

initAccounts(accounts);

const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce((acc, mov) => acc + mov);
  account.balance = balance;
  labelBalance.textContent = `$${balance}`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `$${incomes}`;
  labelSumOut.textContent = `$${Math.abs(out)}`;
  const interest = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => {
      return (
        acc +
        ((account.interestRate / 100) * mov > 1
          ? (account.interestRate / 100) * mov
          : 0)
      );
    }, 0);
  labelSumInterest.textContent = `$${interest}`;
};

const updateUI = function (acc) {
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
  displayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};
// Event Handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // prevent form submit reloading the page
  e.preventDefault();
  currentAccount = accounts.find(
    ({ userName }) => userName === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // removes focus from input pin
    inputLoginPin.blur();
    // display movements
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  // prevent form submit reloading the page
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recieverAcc &&
    recieverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

// must be at least one deposit with at least 10% of loan amount
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    console.log('give loan');
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // close acount
    accounts.splice(
      accounts.findIndex(
        ({ userName }) => userName === inputCloseUsername.value
      ),
      1
    );
    currentAccount = null;
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin = '';
});

// console.log(accounts);

// console.log(accounts);

// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//
// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// SPLICE: extracts form array and mutates original array
// console.log('original: ', arr);
// arr.splice(1)
// console.log('arr.splice(1): ', arr);
// arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(1, 1)
// console.log('arr.splice(1, 1): ', arr);
// arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(1, 0)
// console.log('arr.splice(1, 0): ', arr);
// arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(1, 0, "hi")
// console.log('arr.splice(1, 0, "hi"): ', arr);
// console.log(arr);

// REVERSE
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' = '));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length-1]);
// console.log(arr.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// //   movement > 0 && console.log(`You deposited ${movement}`);
// //   movement < 0 && console.log(`You withdrew ${Math.abs(movement)}`);
// //   // if (movement > 0) {
// //   //   console.log(`You deposited ${movement}`);
// //   // } else {
// //   //   console.log(`You withdrew ${Math.abs(movement)}`);
// //   // }
// // }

// movements.forEach(function(mov, i, arr) {
//   mov > 0 && console.log(`Transaction #${i+1}: You deposited ${mov}`);
//   mov < 0 && console.log(`Transaction #${i+1}: You withdrew ${Math.abs(mov)}`);
// })

// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`);
// })

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR' ,'EUR'])
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _, map) {
//   console.log(`${value}: ${value}`);
// })

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaClean = dogsJulia.slice();
//   dogsJuliaClean.splice(0,1);
//   dogsJuliaClean.splice(-2);
//   const dogsMerged = [...dogsJuliaClean, ...dogsKate];

//   dogsMerged.forEach(function (age, i) {
//     const type = age >= 3 ? 'adult' : 'puppy';
//     if (type === 'adult') {
//       console.log(`Dog number ${i + 1} is an ${type}, and is ${age} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const eurToUSD = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements.map(mov => mov * eurToUSD);

// console.log(movements, movementsUSD);

//   // movement > 0 && console.log(`You deposited ${movement}`);
//   // movement < 0 && console.log(`You withdrew ${Math.abs(movement)}`);
// const movementDescriptions = movements.map((mov, i) =>
// {
//   return `Movement ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`

// })

// console.log(movementDescriptions);

// Filter
// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// Reduce

// console.log(movements);

// const balance = movements.reduce((acc, cur) => acc + cur, 0)
// console.log(balance);

// const maxTransaction = movements.reduce((acc, cur) => Math.max(acc, cur));
// console.log(maxTransaction);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const ages1 = [5, 2, 4, 1, 15, 8, 3];
// const ages2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   // console.log(ages.forEach((age) => console.log(age)));
//   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   // console.log(humanAge);
//   const adults = humanAge.filter(age => age >= 18);
//   const avgAge = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return avgAge;
// };

// console.log(calcAverageHumanAge(ages1));
// console.log(calcAverageHumanAge(ages2));

// PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUSD)
//   .reduce((acc, mov) => acc + mov);

// console.log(totalDepositsUSD);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   // console.log(ages.forEach((age) => console.log(age)));
//   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   // console.log(humanAge);
//   const adults = humanAge.filter(age => age >= 18);
//   const avgAge = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return avgAge;
// };

// const ages1 = [5, 2, 4, 1, 15, 8, 3];
// const ages2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = (ages) => {
//   return ages.map(age =>  (age <= 2 ? 2 * age : 16 + age * 4)).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0)
// }

// console.log(calcAverageHumanAge(ages1));
// console.log(calcAverageHumanAge(ages2));

// Find
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis')

// console.log(movements);
// const lastWithdrawal = movements.findLast(mov => mov < 0);
// console.log(lastWithdrawal);

// // `Your latest large movement was X movements ago`

// const lastLarge = movements.findLastIndex(mov => Math.abs(mov) > 2000)

// console.log(`Your latest large movement was ${movements.length - lastLarge} movements ago`);

// //Equlity
// console.log(movements.includes(-130));

// // condition
// const anyDeposits = movements.some(mov => mov > 1000);
// console.log(anyDeposits);

// Every
// console.log(movements.every(mov => mov > 0));

// // Seperate callback

// const deposit = mov => mov > 0;
// console.log(movements.filter(deposit));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// console.log(arrDeep.flat(2));

// const overallBalance = accounts.flatMap((acc) => acc.movements).reduce((acc, mov) => acc + mov);
// console.log(overallBalance);

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.


TEST DATA:
*/

// const breeds = [
//   {
//     breed: 'German Shepherd',
//     averageWeight: 32,
//     activities: ['fetch', 'swimming'],
//   },
//   {
//     breed: 'Dalmatian',
//     averageWeight: 24,
//     activities: ['running', 'fetch', 'agility'],
//   },
//   {
//     breed: 'Labrador',
//     averageWeight: 28,
//     activities: ['swimming', 'fetch'],
//   },
//   {
//     breed: 'Beagle',
//     averageWeight: 12,
//     activities: ['digging', 'fetch'],
//   },
//   {
//     breed: 'Husky',
//     averageWeight: 26,
//     activities: ['running', 'agility', 'swimming'],
//   },
//   {
//     breed: 'Bulldog',
//     averageWeight: 36,
//     activities: ['sleeping', 'fetch'],
//   },
//   {
//     breed: 'Poodle',
//     averageWeight: 18,
//     activities: ['agility', 'fetch'],
//   },
// ];

// YOUR TASKS:
// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
// const huskyWeight = breeds.find(dog => dog.breed === 'Husky').averageWeight;
// console.log(huskyWeight);
// // 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
// const dogBothActivities = breeds.find(
//   dog => dog.activities.includes('fetch') && dog.activities.includes('running')
// ).breed;
// console.log(dogBothActivities);
// // 3. Create an array "allActivities" of all the activities of all the dog breeds
// const allActivites = breeds.flatMap(dog => dog.activities);
// console.log(allActivites);
// // 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
// const uniqueActivities = [...new Set(allActivites)];
// console.log(uniqueActivities);
// // 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
// const swimmingAdjacent = uniqueActivities.filter(act => act !== 'swimming');
// console.log(swimmingAdjacent);
// // 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
// console.log(breeds.every(dog => dog.averageWeight > 10));
// // 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".
// console.log(breeds.some(dog => dog.activities.length >= 3));

// // BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.
// const fetchWeights = breeds
//   .filter(dog => dog.activities.includes('fetch'))
//   .map(dog => dog.averageWeight);

// console.log(fetchWeights);
// const heaviestFetchBreed = Math.max(...fetchWeights);
// console.log(heaviestFetchBreed);

// Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// // Numbers
// console.log(movements);
// // return < 0, A, B
// // return > 0, B, a
// console.log(movements.sort((a, b) => a - b));

// Array Grouping

// console.log(movements);

// const groupedMovements = Object.groupBy(movements, mov =>
//   mov > 0 ? 'deposit' : 'withdrawal'
// );

// console.log(groupedMovements);

// const groupedByActivity = Object.groupBy(accounts, acc => {
//   const movementCount = acc.movements.length

//   if (movementCount >= 8) return 'very active';
//   if (movementCount >= 4) return 'activa';
//   if (movementCount >= 1) return 'moderage';
//   return 'inactive'
// })

// const groupedBytype = Object.groupBy(accounts, ({type}) => type)

// console.log(groupedBytype);

// const x = new Array(7);
// x.fill(2, 3, 5)
// console.log(x);
// x.fill(1, 0, 3);
// console.log(x);

// // arrya.from

// console.log(Array.from({length: 7}, () => 1));

// const z = Array.from({length: 7}, (_, i) => i+1);
// console.log(z);

// labelBalance.addEventListener('click', function() {

// const movementsUI = Array.from(document.querySelectorAll(".movements__value"),el => Number(el.textContent.replace('$', '')))

// console.log(movementsUI);
// })

// console.log(movements);

// // const reversedMov = movements.toReversed();
// // console.log(reversedMov);
// // console.log(movements);

// // toSorted (sort), toSpliced (splice)

// // const sortedMov  = movements.toSorted();
// // const splicedMov = movements.toSpliced();
// // console.log(sortedMov);
// // console.log(splicedMov);

// const newMovements = movements.with(1, 2000);
// console.log(newMovements);

// const returnMov = ({ movements }) => movements;
// const bankDepositSum = accounts
//   .flatMap(returnMov)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov);
// console.log(bankDepositSum);

// // count deposits in the bank >= 1000
// const numDeposits1000 = accounts
//   .flatMap(returnMov)
//   .filter(mov => mov >= 1000).length;

// const numDeposits1000Reduce = accounts
//   .flatMap(returnMov)
//   .reduce((count, mov) => (mov >= 1000 ? ++count : count), 0);
// console.log(numDeposits1000);
// // console.log(numDeposits1000Reduce);

// // create an object that has sum of deposits and sum of withdrawls
// const { deposits, withdrawals } = accounts.flatMap(returnMov).reduce(
//   (sums, cur) => {
//     // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//     sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//     return sums;
//   },
//   { deposits: 0, withdrawals: 0 }
// );

// console.log(deposits, withdrawals);

// // create a function to convert a string to title case
// // this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const capitilize = str => str[0].toUpperCase() + str.slice(1);
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitilize(word)))
//     .join(' ')
//   return capitilize(titleCase);
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and This is a LONG title but not too long'));

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).
TEST DATA:
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// YOUR TASKS:
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
dogs.forEach(dog => (dog.recFood = dog.weight ** 0.75 * 28));
console.log(dogs);
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
const sarahsDog = dogs.find(({ owners }) => owners.includes('Sarah'));
const diet = sarahsDog.curFood >= sarahsDog.recFood;
console.log(diet);
// 3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
const tooMuch = dog => dog.curFood > dog.recFood;
const tooLittle = dog => dog.curFood < dog.recFood;
const ownersTooMuch = dogs.filter(tooMuch);
const ownersTooLittle = dogs.filter(tooLittle);
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
const ownerMsg = (owners) => {
  let message = '';
  owners.forEach((owner, i, arr) => {
    message += `${owners[i]}${i < arr.length - 1 ? ' and ' : "'s"}`;
  });
  return message;
}
ownersTooMuch.forEach(({ owners }) => {
  const message = ownerMsg(owners)
  console.log(`${message} dogs eat too much`);
});

ownersTooLittle.forEach(({ owners }) => {
  const message = ownerMsg(owners)
  console.log(`${message} dogs eat too little`);
});
// 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log(dogs.some((dog)=> Math.abs(dog.recFood - dog.curFood) <= 1));
// 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
console.log(dogs.every((dog)=> Math.abs(dog.recFood - dog.curFood) <= (0.10 * dog.recFood)));

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
console.log(dogs.filter((dog)=> Math.abs(dog.recFood - dog.curFood) <= (0.10 * dog.recFood)));

// 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
console.log(Object.groupBy(dogs, (dog) => {
  const absdiff = Math.abs(dog.recFood - dog.curFood);
  const diff = dog.recFood - dog.curFood;

  if (absdiff <= 1){
    return 'exact';
  } else if (diff > 0) {
    return 'too-little';
  } else {
    return 'too-much'
  }
}));

// 9. Group the dogs by the number of owners they have
console.log(Object.groupBy(dogs, ({owners}) => owners.length));
// 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!
console.log(dogs.toSorted(({recFood: recFoodA}, {recFood: recFoodB}) => recFoodA - recFoodB));
// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
