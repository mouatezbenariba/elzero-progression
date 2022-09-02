type custom = string | boolean;

function isHeOld(age: number | string): custom | number {
  let a = typeof age === 'string' ? 'Error' : age > 40 ? 'Yes' : 'No';
  return a;
}

// Do Not Edit Here
console.log(isHeOld('100')); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
