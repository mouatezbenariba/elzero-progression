let myArray = ['E', 'l', 'z', ['e', 'r'], 'o'];

let newArray = myArray
  .join()
  .split(',')
  .reduce(function (acc, curr) {
    return curr !== ',' ? `${acc}${curr}` : `${acc}`;
  });
console.log(newArray);
// Elzero
