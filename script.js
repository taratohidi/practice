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
};
