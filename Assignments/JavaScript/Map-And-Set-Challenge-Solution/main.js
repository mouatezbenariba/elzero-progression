/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(
  Number(
    [...new Set(Array.from(n1.join(''), (e) => +e))]
      .sort()
      .reverse()
      .slice(-n2.length)
      .join('')
  )
); // 210

// Explanation Step by Step

// let a = n1.join('');
// let b = Array.from(a, (e) => +e);
// let c = Math.max(...b);
// let d = new Set(b);
// Number([...d].sort().reverse().slice(-n2.length).join(''));
