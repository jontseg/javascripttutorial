'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, MainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Order Receieved ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(...otherIngredients);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


///////////////////////////////////////////
// Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  numGuests: 20
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovannia Rossi'
}

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
console.log('------Exercises------');
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
