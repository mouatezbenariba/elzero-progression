function calculate(numOne: number, numTwo: number): number {
  return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
console.log(calculate('10', '20')); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2
