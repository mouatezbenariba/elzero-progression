let start = 0;
let swappedName = 'elZerO';

// // Output
// //('ELzERo');
swappedName = swappedName.split();
for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    swappedName[i] = swappedName[i].toLowerCase();
  } else {
    swappedName[i] = swappedName[i].toUpperCase();
  }
}
// console.log(`"${a.join('')}"`);
console.log(swappedName);
