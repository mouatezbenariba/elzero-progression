/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
  { title: 'Osama', age: 39, available: true, skills: ['HTML', 'CSS'] },
  { title: 'Ahmed', age: 25, available: false, skills: ['Python', 'Django'] },
  { title: 'Sayed', age: 33, available: true, skills: ['PHP', 'Laravel'] },
];

let [a, b, c] = myFriends;

if (chosen === 1) {
  f = a;
}
if (chosen === 2) {
  f = b;
}
if (chosen === 3) {
  f = c;
}

({
  title,
  age,
  available,
  skills: [, n],
} = f);

print();

function print() {
  console.log(title);
  console.log(age);
  if (available === true) {
    console.log('Available');
  } else {
    console.log('Not Available');
  }
  console.log(n);
}
