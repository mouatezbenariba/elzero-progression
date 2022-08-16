let myInfo = {
  username: 'Osama',
  role: 'Admin',
  country: 'Egypt',
};

console.log(new Map(Object.entries(myInfo)));
console.log(new Map(Object.entries(myInfo)).size);
console.log(new Map(Object.entries(myInfo)).has('role'));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
