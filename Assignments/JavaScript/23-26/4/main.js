let myVar = '100.56789 Views';

console.log(Math.round(Number(parseInt(myVar)))); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57
