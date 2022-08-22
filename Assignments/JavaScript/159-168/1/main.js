// A timestamp is the current time of an event that a computer records.
let dateNow = Date.now();
let birthDay = new Date('1995-05-30');
let age = dateNow - birthDay;

console.log(`${Math.round(age / 1000)} Seconds`);
console.log(`${Math.round(age / 1000 / 60)} Minutes `);
console.log(`${Math.round(age / 1000 / 60 / 60)} Hours`);
console.log(`${Math.round(age / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.round(age / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.round(age / 1000 / 60 / 60 / 24 / 365)} Years`);