'use strict';
// Scope
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Tina';
//       const str = `oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       // const output = 'new output';

//       output = 'new output';
//     }

//     console.log(millenial);
//     console.log(output);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'TARA';
// calcAge(1984);

// Variable enviroment
// console.log(me);
// console.log(job);
// console.log(birth);

// var me = 'tara';
// let job = 'full stack';
// const birth = '1984';

// console.log(add1(2, 3));
// // console.log(add2(2, 3));
// console.log(add3(2, 3));

// function add1(a, b) {
//   return a + b;
// }
// const add2 = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// console.log(add2(2, 3, 4, 5));

// var add3 = (a, b) => a + b;

// The this keyword

// it's simply the window object
// console.log(this);

// Primitive vs Reference Types

// let lastName = 'Tohidi';
// let oldLastName = lastName;
// lastName = 'Booshehrian';

// console.log(lastName);
// console.log(oldLastName);

// const tina = {
//   firstName: 'tina',
//   lastName: 'tohidi',
// };

// const marriedTina = tina;

// marriedTina.lastName = 'mansoori';

// console.log('tina:', tina);
// console.log('marriedTina:', marriedTina);

// const tinaCopy = Object.assign({}, tina);
// tinaCopy.lastName = 'mansoori';

// console.log('tina:', tina);
// console.log('tinaCopy:', tinaCopy);

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ startIndex, mainIndex, time, address }) {
    console.log(
      `Order recived! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

////// destructuring array
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

////// Destructuring Object

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, menu = [] } = restaurant;
// console.log(restaurantName, menu);

///// nested object
// const {
//   fri: { open, close },
//   sat: { open: o, close: c },
// } = openingHours;
// console.log(open, close, o, c);

// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'vancouver',
//   mainIndex: 2,
//   startIndex: 0,
// });

////The Spread Operator

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Shallow Copy
const menuCopy = [...restaurant.mainMenu];

// Join 2 array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
