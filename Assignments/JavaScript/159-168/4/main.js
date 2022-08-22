let birthDay = Date.parse('Oct 15 1997');

console.log(new Date(birthDay));
console.log(new Date(1997, 9, 15));
console.log(new Date('1997-10-15'));

// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"