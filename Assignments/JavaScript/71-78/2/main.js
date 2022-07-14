let myString = 'EElllzzzzzzzeroo';

let newString = myString
  .split('')
  .filter(function (ele, i) {
    return myString[i] !== myString[i + 1];
  })
  .join('');
console.log(`${newString}`);
// Elzero
