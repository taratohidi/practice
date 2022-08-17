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
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//////OPTINAL CHAINING
// if restaurant.openingHours.mon console.log(restaurant.openingHours.mon.open)
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours.fri?.open);

// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? 'CLOSED';
//   console.log(open);
// }
// console.log(restaurant.order?.(0, 1) ?? 'method is not exist.');

/////// LOOP OVER OBJECT
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

////// FOR-OF LOOP
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) console.log(item);
// for (const item of menu.entries()) console.log(item);
// for (const item of menu.entries()) console.log(`${item[0] + 1} : ${item[1]}`);
// for (const [i, el] of menu.entries()) console.log(`${i + 1} : ${el}`);

////// DESTRUCTURING ARRAYS AND OBJECTS
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, menu = [] } = restaurant;
// console.log(restaurantName, menu);

///// NESTED OBJECT
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

////THE SPREAD OPERATOR
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//// Shallow Copy
// const menuCopy = [...restaurant.mainMenu];

///// Join 2 array
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

// console.log(new Set('tara'));

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

// const [player1, player2] = game.players;
// console.log(player1, player2);

// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...player1];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(players.length);
// };

// printGoals(...game.scored);

// (team1 > team2 && console.log('team1')) ||
//   (team1 < team2 && console.log('team2'));

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
// const { scored, odds } = game;
// const oddsEntries = Object.entries(odds);

// for (const [goal, player] of scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${player}`);
// }

// const oddsValue = Object.values(odds);
// let avg = 0;
// for (const odd of oddsValue) {
//   avg += odd / oddsValue.length;
// }
// // avg /= oddsValue.length;
// console.log(avg);

// const oddss = Object.values(game.odds);
// let average = 0;
// for (const odd of oddss) average += odd;
// average /= oddss.length;
// console.log(average);

// for (const [key, value] of oddsEntries) {
//   (game[key] && console.log(`Odd of victory ${game[key]}: ${value}`)) ||
//     (!game[key] && console.log(`Odd of draw: ${value}`));
// }
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

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

const events = [...gameEvents.values()];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const eventEntries = [...gameEvents.entries()];
console.log(eventEntries);

for (const [key, value] of eventEntries) {
  (key < 45 && console.log(`[FIRST HALF] ${key}: ${value}`)) ||
    (key > 45 && console.log(`[SECOND HALF] ${key}: ${value}`));
}
