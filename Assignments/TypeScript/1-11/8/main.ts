function printInConsole(...a: any) {
  a.forEach((ele: any) => {
    console.log(`The Value Is ${ele} And Type Is ${typeof ele}`);
  });
  console.log('Done');
}

console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole('A', 'B', 'C'));
console.log(printInConsole(true, false, false, true, true));
