let myFriends = ['Ahmed', 'Elham', 'Osama', 'Gamal'];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2

let last = myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
