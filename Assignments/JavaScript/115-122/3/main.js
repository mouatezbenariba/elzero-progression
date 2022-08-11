let arr1 = ['Ahmed', 'Sameh', 'Sayed'];
let arr2 = ['Mohamed', 'Gamal', 'Amir'];
let arr3 = ['Haytham', 'Shady', 'Mahmoud'];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
let [a, b, c] = arr3.slice(-2).concat(arr1.slice(0, 1));

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
