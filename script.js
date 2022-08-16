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
console.log(me);
// console.log(job);
// console.log(birth);

var me = 'tara';
let job = 'full stack';
const birth = '1984';

console.log(add1(2, 3));
// console.log(add2(2, 3));
console.log(add3(2, 3));

function add1(a, b) {
  return a + b;
}
const add2 = function (a, b) {
  return a + b;
};

var add3 = (a, b) => a + b;
