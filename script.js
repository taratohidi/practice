'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Tina';
      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);

      // const output = 'new output';

      output = 'new output';
    }

    console.log(millenial);
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'TARA';
calcAge(1984);
