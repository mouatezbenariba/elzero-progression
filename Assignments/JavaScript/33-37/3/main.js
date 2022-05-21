let num1 = 10;
let num2 = 30;
let num3 = '30';

// Needed Output
('30 Is Larger Than 10 And Type string Not The Same Type As number');
('30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number');
('{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}');

if (num3 > num1 && typeof num3 !== typeof num2) {
  console.log(
    `{num3} Is Larger Than {num1} and Type ${typeof num3} is Not The Same As ${typeof num2}`
  );
}

if (num3 > num1 && num3 == num2 && num3 !== num2) {
  console.log(
    `{num3} Is Larger Than {num1} And Value Is The Same As {num2} And Type Is Not The Same Type As ${typeof num2}`
  );
}

if (num3 !== num1 && num3 !== num1 && typeof num3 !== typeof num2) {
  console.log(
    '{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}'
  );
}
