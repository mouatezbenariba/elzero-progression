let chars = ['A', 'B', 'C', 20, 'D', 'E', 10, 15, 6];
let array1 = [];
let array2 = [];

// console.log(array1.copyWithin(0, i - 1, (i - 1) * 2));
for (let i = 0; i < chars.length; i++) {
  if (typeof chars[i] === 'number') {
    array1.push(chars[i]);
  } else {
    array2.push(chars[i]);
  }
}

let d = array1.length;

chars = array1.concat(array2);

console.log(chars.copyWithin(0, d, d * 2));
