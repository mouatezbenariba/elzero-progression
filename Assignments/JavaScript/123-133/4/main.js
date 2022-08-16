let theNumber = 100020003000;

console.log(Number([...theNumber.toString()].sort().join('')));

// adding set to the solution (not necessary)
// console.log(Number([...new Set(theNumber.toString())].sort().join('')));

// Needed Output
// 123;
