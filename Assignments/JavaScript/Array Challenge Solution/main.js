/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer'];

// Write Code Here

// methode 1
console.log(
  my.slice(zero, my[zero].slice(counter).concat(my[zero].slice(counter)).length).reverse()
); // ["Osama", "Elham", "Mazero", "Ahmed"];

// methode 2
console.log(my.slice(zero, my.includes(my[zero]).toString().length).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(counter - my[zero].slice(counter).length, counter).reverse()); // ["Elham", "Mazero"]

console.log(
  my[my[zero].slice(counter).length]
    .slice(zero, my[zero].slice(counter).length)
    .concat(
      my[counter - my[zero].slice(counter).length].slice(
        my[zero].slice(counter).length,
        my[1].length
      )
    )
); // "Elzero"

console.log(
  my[counter - my[zero].slice(counter).length][
    my.includes(my[zero]).toString().length
  ].concat(my[counter - my[zero].slice(counter).length][my[zero].length].toUpperCase())
); // "rO"
