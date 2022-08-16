let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// 01
console.log(numsOne.concat(numsTwo));
// 02
console.log(Array.from((numsOne + ',' + numsTwo).split(','), (e) => +e));
// 03
console.log([...numsOne, ...numsTwo]);
// 04
console.log((numsOne + ',' + numsTwo).split(',').map((e) => +e));
// 05
numsTwo.forEach(function (e) {
  numsOne.push(e);
});
console.log(numsOne);

// Needed Output
// [1, 2, 3, 4, 5, 6];
