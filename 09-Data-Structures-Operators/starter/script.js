'use strict';

// Data needed for a later exercise

/////////////////////////////////////////////
// String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const rows = flights.split('+');
for (const flight of rows) {
  const [status, from, to, time] = flight.split(';')
  const output = (`${status.includes('Delayed') ? '🛑' : '' } ${status.replace('_','').replace('_', ' ')} ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':','h')})`).padStart(40)
  console.log(output);
}


// 🛑 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
// 🛑 Delayed Departure from HEL to FAO (12h05) 
//            Departure from FAO to LIS (12h30)

/////////////////////////////////////////////
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0,
//     close: 24,
//   },
// };
// console.log(openingHours);

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   // ES6 enhanced object literals
//   openingHours,
//   order(starterIndex, MainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
//   },
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     // console.log(starterIndex, mainIndex, time, address);
//     console.log(
//       `Order Receieved ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
//     );
//   },
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(...otherIngredients);
//   },
// };

///////////////////////////////////////////////////
// Working with Strings 3

// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedman'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedmann'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     // upperCaseArray.push(n[0].toUpperCase() + n.slice(1))
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '*' ).padEnd(35, '+'));
// console.log(message.padStart(25, '*').padEnd(35,  '+'));

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard(323240985209231));
// console.log(maskCreditCard('32323233232391023232231'));

// // Repeat

// const message2 = 'Bad weather... All Departured Delayed...';

// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// }

// planesInLine(5);

///////////////////////////////////////////////////
// Working with Strings 1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);

// console.log(airline.lastIndexOf('r'));
// console.log(airline.lastIndexOf('Portugal'));

// console.log(airline.slice(4, 7));
// console.log(airline.slice());

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got lucky');
//   }
// };

// // checkMiddleSeat('11B');

// ///////////////////////////////////////////////////
// // Working with Strings 2
// console.log(airline.toLocaleLowerCase());

// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = 'hello@jonas.io';
// const loginEmail = '    Hello@Jonas.Io \n';

// const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // Replacing
// const priceGB = '288,797£';
// const priceUS = priceGB.replace(',', '.').replace('£', '$');
// console.log(priceUS);

// const annoucement =
//   'All passengeers come to boarding door 3. Boarding door 23!';

// console.log(annoucement.replaceAll('door', 'gate'));
// console.log(annoucement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('neo'));
// console.log(plane.includes('Ai'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the new airbus family');

// }

// // Practice exercise
// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase()
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log("You are not allowed on board");
//   } else {
//     console.log("Welcome aboard");
//   }
// }

// checkBaggage('I have a laptop, some food, and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////////////////////////
// Maps: Iteration. Maps are iterable, objects are not
// const question = new Map([
//   ['question', 'What is the best programming langauage in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'Try again!']
// ])
// console.log(question);

// // convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//   // console.log(key, value);
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = 3;
// console.log("answer: ", answer);
// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
///////////////////////////////////////////
// Maps

// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');
// console.log(rest.get('name'));
// // console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get(open) && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// console.log(rest);
// console.log(rest.size);

// const arr = [1,2]
// rest.set(arr, 'Test')
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest.get(arr));

///////////////////////////////////////////
// Sets

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// const commonFood = italianFoods.intersection(mexicanFoods);
// console.log("Intersection: ", commonFood);

// const commonFoodArray = [...commonFood];
// console.log("Intsection Arary: ", commonFoodArray);

// const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log("Union: ", italianMexicanFusion);

// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// const uniqueItalianfoods = italianFoods.difference(mexicanFoods);
// console.log("Difference Italian: ", uniqueItalianfoods);

// const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFoods);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

///////////////////////////////////////////
// Sets
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('Jonathan Tsegaye').size);

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `
// }
// console.log(openStr);
// // Property VALUES

// const values = Object.values(openingHours);
// console.log(values);

// // Property Entries
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, {open, close}] of entries) {
//   console.log(`On ${day} open at ${open} and close at ${close}`);
// }

///////////////////////////////////////////
// Optional Chaining

// if (restaurant.openingHours.mon.open)console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
// console.log(restaurant.openingHours);

// // console.log(restaurant.openingHours.thu);
// for (const day of days) {
//   // console.log(restaurant.openingHours.day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// //Arrays
// const users = [
//   {
//     name: 'Jonas',
//     email:  'hello@jonas.com'
//   }
// ]

// console.log(users[0]?.name ?? 'User array empty');

///////////////////////////////////////////
// Logical Assignment Operators

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovannia Rossi',
// };

///////////////////////////////////////////
// Looping Arrays: The for-of Loop

// const menu =  [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
//

///////////////////////////////////////////
// Logical Assignments Operators

// OR assignment operator
// asigns a value to a variable if the variable is falsy
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator
// assigns a value to a variable if the variable is nullish
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1, rest2);

// AND assignment operator
// assigns a value to a variable if it is truthy
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1, rest2);

///////////////////////////////////////////
// Nullish Coalescing Operator
// Nullish: null and undefined
// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;

///////////////////////////////////////////
// Short Circuiting

// console.log('----------------OR-----------------');
// // Logical operators
// //  use ANY data type, return ANY data type, use short-circuiting

// // Short circuiting: returns the first true value, it will returned
// // immiedietly
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello');

// restaurant.numGuests = 23;

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// console.log('----------------AND-----------------');
// // Short circuiting with AND
// // returns the first false one, or the last true if all are true
// console.log(1 && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

///////////////////////////////////////////
// The Rest Pattern and Parameters

// // 1) Destructuring

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...flights, [3, 4]];

// // REST, because on LEFT side of =
// // rest element must be the last element in array
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// // console.log(pizza, risotto, otherFood);

// // Objects
// const { name, categories, ...otherProperties } = restaurant;

// console.log(
//   `name: ${name}, categories: ${categories}, otherProperties: ${otherProperties}`
// );

// // const {openingHours: {sat: {open, close}}} = restaurant
// // console.log(open, close);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(5, 3, 7, 2, 5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("Pepp", "Who", "Cares");
// restaurant.orderPizza("Pepp");

///////////////////////////////////////////
// The Spread Operator (...)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// const newArr = [1, 2, ...arr];
// console.log(badNewArr);
// console.log(newArr);

// console.log(...newArr);
// const newMenu = [...restaurant.mainMenu, 'Chicken Nuggies'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const joinedMenus = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(joinedMenus);

// // Iterables:
// const str = 'Jonas';

// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// console.log();

// // Real-world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.mainMenu = [...restaurantCopy.mainMenu, "Cheese"]
// console.log(restaurant.mainMenu);
// console.log(restaurantCopy.mainMenu);

////////////////////////////////////////////
// DESTRUCTURING OBJECTS

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// });

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// // const {
// //   fri: { open, close },
// // } = openingHours;

// // const open = openingHours.fri.open
// // const close = openingHours.fri.close

// const {
//   fri: { open: o, close: c },
// } = openingHours;

// console.log(o, c);

////////////////////////////////////////////
// DESTRUCTURING  ARRAYS

// const arr = [2, 3, 4];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive two return  values from a function
// // console.log(restaurant.order(3, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [1, 4, [5, 6]];

// // const  [i, ,j] = nested;
// // console.log(i,j);

// // Nested destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// console.log('------Exercises------');
///////////////////////////////////////////////////
// Maps: Iteration

///////////////////////////////////////////////////
// Maps: Fundamentals
// const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);
// console.log(bookMap);
// bookMap.set('pages', 464);
// bookMap.has('author') && console.log("The author of the book is known");

///////////////////////////////////////////////////
// Sets
// const allKeywords = [];
// for (const book of books) {
//   allKeywords.push(...book.keywords);
// }
// console.log(allKeywords);
// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);
// uniqueKeywords.add('coding')
// uniqueKeywords.add('science')
// uniqueKeywords.delete('business')

// const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);
// uniqueKeywords.clear()
///////////////////////////////////////////////////
// Looping Objects: Object Keys, Values and Entries

// const entries = [];

// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([key])
// }
// console.log(entries);

// for (const [index, values] of Object.values(books[0].thirdParty.goodreads).entries()){
//   entries[index].push(values)
// }

// console.log(entries);

// const entries2 = Object.entries(books[0].thirdParty.goodreads)

// console.log(entries, entries2);
///////////////////////////////////////////////////
// Enhanced Object Literals

// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// // Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1]
//   // ...
// };
// console.log(newBook);

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
//   // ...
// };
// console.log(newBook2);

///////////////////////////////////////////////////
// Optional Chaining (?.)

// const getFirstKeyword = (book) => {
//   return book.keywords ?? '';
// }
// console.log(getFirstKeyword(books[0]));
// console.log(getFirstKeyword(newBook2));

///////////////////////////////////////////////////
// Looping Arrays: The for-of Loop
// let pageSum = 0
// for (let book of books) {
//   pageSum += book.pages;
// }
// console.log(pageSum);

// const allAuthors = [];
// for (let book of books) {
//   typeof book.author === 'object' && allAuthors.push(...book.author)
//   typeof book.author === 'string' && allAuthors.push(book.author)
// }
// console.log(allAuthors);

// for (let [i, author] of allAuthors.entries()) {
//   console.log(`${i+1}. ${author}`);
// }
///////////////////////////////////////////////////
// Destructuring Arrays
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);
// const [, , thirdBook] = books;
// console.log(thirdBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144585],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings,oneStarRatings,threeStarRatings);
// const { title, author, ISBN } = books[0];

// console.log(`2.1: ${title}, ${author}, ${ISBN}`);

///////////////////////////////////////////////////
// Destructuring Objects
// const { keywords: tags } = books[0];

// console.log(`2.2: ${tags}`);

// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(`2.3 ${language} ${programmingLanguage}`);

// let bookTitle = 'unknown';
// let bookAuther = 'unknown';
// ({ title: bookTitle, author: bookAuther } = books[0]);
// console.log(`2.4 ${bookTitle} ${bookAuther}`);

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(`2.5 ${bookRating}`);

// const printBookInfo = function({title, author, year = 'year unknown'}) {
//   console.log(`${title} by ${author}, ${year}`);
// }

// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });

///////////////////////////////////////////////////
// The Spread Operator
// const bookAuthors = [...books[0].author, ...books[1].author]
// console.log(bookAuthors);

// const spellWord = function(str) {
//   console.log(...str);
// }
// spellWord("hello")

// ///////////////////////////////////////////////////
// // Rest Pattern and Parameters

// const [mainKeyword, ...rest] = books[0].keywords
// console.log(mainKeyword, rest);

// const {publisher: bookPublisher, ...restOfTheBook} = books[1];
// console.log(bookPublisher, restOfTheBook);

// const printBookAuthorsCount = function(title, ...authors) {
//   console.log(`The book \"${title}\" has ${authors.length} authors`);
// }

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// ///////////////////////////////////////////////////
// // Short Circuiting (&& and ||)

// const hasExamplesInJava = function(book) {
//   return book.programmingLanguage === 'Java' || 'no data available'
// }

// console.log(hasExamplesInJava(books[0]));
// console.log("---------loop--------");

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent && console.log(`\"${books[i].title}\" provides online content`)
// }

///////////////////////////////////////////
// The Nullish Coalescing Operator (??)

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ??
//     console.log(`"\"${books[i].title}\" provides no data about its online content`);
// }

///////////////////////////////////////////
// Logical Assignments Operators
// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2)
// }
// console.log(books);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players
// console.log(`Players1: ${players1} Players2: ${players2}`);
// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final);

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // const {team1, x:draw, team2} = game.odds;
// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// const printGoals = (...playerNames) => {
//   console.log(playerNames, playerNames.length);
// }

// console.log(printGoals('Thiago', 'Coutinho', 'Perisic'));

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// console.log(team1, team2);
// team1 < team2 && console.log("Team 1 is gonna win");
// team2 < team1 && console.log("Team 2 gonna win");

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i}: ${player}`);
// }

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// let sum = 0;
// for (let odd of Object.values(game.odds)) {
//   sum += odd
// }
// const avg = sum / Object.values(game.odds).length;
// console.log(avg);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// const {odds: {team1, x, team2}} = game;
// console.log(`Odd of victory ${game.team1}: ${team1}`);
// console.log(`Odd of draw ${x}`);
// console.log(`Odd of victory ${game.team2}: ${team2}`);

// // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// //       {
// //         Gnarby: 1,
// //         Hummels: 1,
// //         Lewandowski: 2
// //       }
// // const scorers

// const scorers = {}

// for (const scorer of game.scored) {
//   scorers[scorer] ? scorers[scorer] += 1 : scorers[scorer] = 1
// }
// console.log(scorers);

// const jon = {
//   name: 'Jon',
//   printName: function () {
//     console.log(this.name); // parent?
//     // const anotherFunc = () => {
//     //   console.log(this.name); // 'Jon'
//     // }
//     // anotherFunc()
//   },
//   print: () => {
//     console.log(this.name);
//  }
// }

// jon.printName()
// jon.print()

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// console.log("-----Question 1-----");
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// console.log("-----Question 2-----");
// gameEvents.delete(64)

// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log("-----Question 3-----");
// console.log(`An event happened on average, every ${90 / gameEvents.size} minutes`);
// const time = [...gameEvents.keys()].pop()
// console.log(time);
// console.log(`An event happened on average, every ${time / gameEvents.size} minutes`);

// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       // [FIRST HALF] 17: ⚽️ GOAL
// console.log('-----Question 4-----');
// for (const [time, event] of gameEvents) {
//   const half = time <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${time}: ${event}`);
// }

///////////////////////////////////////
// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀
// */

// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const textArea = document.querySelector('textarea');
// const button = document.querySelector('button');
// button.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const listText = text.split('\n');
//   const camelCase = [];
//   for (const [i, word] of listText.entries()) {
//     const [first, second] = word.toLowerCase().trim().split('_');
//     // console.log(first, second);
//     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
//     console.log(`${output.padEnd(30)}${'✅'.repeat(i + 1)}`);
//     // camelCase.push(
//     //   (word[0].toLowerCase() +
//     //     word.slice(1, word.indexOf('_')) +
//     //     word[word.indexOf('_') + 1].toUpperCase() +
//     //     word.slice(word.indexOf('_') + 2)).padEnd(30) + '✅'.repeat(i + 1)
//     // );
//     // console.log((word[0].toLowerCase() +
//     // word.slice(1, word.indexOf('_')) +
//     // word[word.indexOf('_') + 1].toUpperCase() +
//     // word.slice(word.indexOf('_') + 2).padEnd(30) + 'h').length);
//   }
//   // textArea.value=camelCase.join('\n')
//   // console.log(camelCase.join('\n'));
//   // console.log(text);
// });
// '✅'.repeat(i + 1)