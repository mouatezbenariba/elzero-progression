/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

// First Line
console.log(++a + +b++ + +c++ - +a++);
// Variables Values : a = 10; b = "20"; c = 80
/*
  [++a]
  - Value: 11
  - Explain: pre-increment (add 1 then use the value in the expression)
  [+]
  - Explain: addition
  [+b++]
  - Value: 20
  - Explain: Unary plus (type coercion) + post-increment (use the value in the expression then add 1)
  [+]
  - Explain: addition
  [+c++]
  - Value: 80
  - Explain: Unary plus + post-increment (use the value in the expression then add 1)
  [-]
  - Explain: substraction
  [+a++]
  - Value: 11
  - Explain: Unary plus + post-increment (use the value in the expression then add 1)
  Result : 11 + 20 + 80 - 11 = 100
*/

// Second Line
console.log(++a + -b + +c++ - -a++ + +a);
// Variables New Values : a = 12; b = 21; c = 81
/*
  [++a]
  - Value: 13
  - Explain: pre-increment (add 1 then use the value in the expression)
  [+]
  - Explain: addition
  [-b]
  - Value: -21
  - Explain: Unary negation (type coercion)
  [+]
  - Explain: addition
  [+c++]
  - Value: 81
  - Explain: Unary plus + post-increment (use the value in the expression then add 1)
  [-]
  - Explain: substraction
  [-a++]
  - Value: -13
  - Explain: Unary negation + post-increment (use the value in the expression then add 1)
  [+]
  - Explain: addition
  [+a]
  - Value: 14
  - Explain: Unary positive
  Result : 13 + -21 + 81 - -13 + 14 = 100
*/

// Third Line
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// Variables New Values : a = 14; b = 21; c = 82
/*
  [--c]
  - Value: 81
  - Explain: pre-decrement (substract 1 then use the value in the expression)
  [+]
  - Explain: addition
  [+b]
  - Value: 21
  - Explain: Unary plus (type coercion)
  [+]
  - Explain: addition
  [--a]
  - Value: 13
  - Explain: pre-decrement (substract 1 then use the value in the expression)
  [*]
  - Explain: multiplication
  [+b++]
  - Value: 21
  - Explain: Unary plus + post-increment (use the value in the expression then add 1)
  [-]
  - Explain: substraction
  [+b]
  - Value: 22
  - Explain: Unary positive
  [*]
  - Explain: multiplication
  [a]
  - Value: 13
  [+]
  - Explain: addition
  [--a]
  - Value: 12
  - Explain: pre-decrement (substract 1 then use the value in the expression)
  [-]
  - Explain: substraction
  [+true]
  - Value: 1
  - Explain: Unary positive (type coercion)
  Result : 81 + 21 + 13 * 21 - 22 * 13 + 12 -1 = 100
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log( -d * +e); // 2000
console.log((- --d * ++g) - --f); // 173 // 173
