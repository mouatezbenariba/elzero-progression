/*
  Loop Challenge
*/

let myAdmins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Samera', 'zaki'];
let trueAdmins = [];
let myEmployees = [
  'Amgad',
  'Samah',
  'Ameer',
  'Omar',
  'Othman',
  'Amany',
  'Samia',
  'Anwar',
];

//Solution

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === 'Stop') {
    break;
  }
  trueAdmins[i] = myAdmins[i];
}
document.write(`<div>We Have ${trueAdmins.length} Admins</div>`);

let c = 0;
myEmployees.sort();
for (i = 0; i < myAdmins.length; i++) {
  c = 0;
  if (myAdmins[i] === 'Stop') {
    break;
  }
  document.write(`<hr>
  <p>the Admin of Team (${i + 1}) is : ${myAdmins[i]}</p>`);
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0] === myEmployees[j][0]) {
      c++;
      document.write(`<p>${c}- ${myEmployees[j]}<p>`);
    }
  }
}
