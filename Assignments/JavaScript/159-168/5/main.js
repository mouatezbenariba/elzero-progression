let start = performance.now();
for (let i = 1; i <= 99999; i++) {
  console.log(i);
}
let end = performance.now();
// Needed Output
console.log(`Loop Took ${end - start} Milliseconds`);

// "Loop Took 1921 Milliseconds."