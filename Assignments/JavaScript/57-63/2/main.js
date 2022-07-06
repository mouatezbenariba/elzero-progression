// add | substract | multiply
function calculate(firstNum, secondNum, operation = 'add') {
  let a;
  operation === 'add'
    ? (a = firstNum + secondNum)
    : operation === 'substract'
    ? (a = firstNum - secondNum)
    : operation === 'multiply'
    ? (a = firstNum * secondNum)
    : 'hello';
  if (secondNum === undefined) {
    return document.write(`<p>Second Number Not Found</p>`);
  } else {
    return document.write(`<p>The Solution is : ${a}</p>`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'substract'); // -10
calculate(20, 30, 'multiply'); // 600
