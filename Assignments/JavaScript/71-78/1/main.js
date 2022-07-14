let mix = [1, 2, 3, 'E', 4, 'l', 'z', 'e', 'r', 5, 'o'];

let newMix = mix
  .map(function (ele) {
    return ele;
  })
  .reduce(function (acc, curr) {
    return typeof curr === 'string' ? `${acc}${curr}` : `${acc}`;
  }, '');

console.log(newMix);
// Elzero
