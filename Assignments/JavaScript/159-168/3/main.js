let date = new Date();
let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

date.setDate(0);
console.log(date);
console.log(
  `Previous Month is ${months[date.getMonth()]} and The Last Day is ${date.getDate()}`
);

// Needed Output
// 'Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)';
// 'Previous Month Is April And Last Day Is 30';