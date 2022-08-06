let num = prompt('Print number from 5 To 10');

// Convert the strings in the array to numbers
let numConverted = num.split('-').map(function (element) {
  return element * 1;
});

// sort the array
if (numConverted[0] > numConverted[1]) {
  numConverted = numConverted.reverse();
}

let countDown = function () {
  console.log(numConverted[0]);
  numConverted[0] += 1;
  if (numConverted[0] > numConverted[1]) {
    clearInterval(counter);
  }
};

let counter = setInterval(countDown, 1000);
