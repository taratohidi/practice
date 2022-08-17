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

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Shallow Copy
// const menuCopy = [...restaurant.mainMenu];

// // Join 2 array
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const [pizza, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, otherFood);

// const res1 = {
//   name: 'yas',
//   numGuest: 20,
// };

// const res2 = {
//   name: 'tara',
//   owner: 'Tara Tohidi',
// };

// const res3 = {
//   name: 'tina',
//   numGuest: 0,
// };

// res1.numGuest ||= 10;
// res2.numGuest ||= 10;
// res3.numGuest ??= 10;

// res1.owner &&= '<ANONYMOUS>';
// res2.owner &&= '<ANONYMOUS>';

// console.log(res1.numGuest);
// console.log(res2.numGuest);
// console.log(res3.numGuest);
// console.log(res1);
// console.log(res2.owner);

// Challenge #1
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

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...player1];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(players.length);
};

printGoals(...game.scored);

(team1 > team2 && console.log('team1')) ||
  (team1 < team2 && console.log('team2'));
