setOfNumbers = new Set().add(10);
setOfNumbers.add(20);
setOfNumbers.add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers][setOfNumbers.size - 1]);

// // Needed Output
// Set(3) {10, 20, 2}
// 2
