let theName = 'Elzero';

console.log(Array.from(theName, (e) => e));
console.log([...theName]);
console.log(theName.split(''));
console.log([...new Set(theName)]);

let d = [];
for (let i = 0; i < theName.length; i++) {
  d.push(theName[i]);
}
console.log(d);

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o'];
