2// Add Variables Here
var numberOne = 10,
numberTwo = 20;

// Ouput
console.log("10"+"20"); // Normal Concatenate => 1020
console.log(typeof ("10"+"20")); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); //Template Literals Way => String

console.log("10\n"+"20");
/*
Normal Concatenate
20
10
*/

console.log(`${numberOne}
${numberTwo}`);
/*
Template Literals Way
20
10
*/