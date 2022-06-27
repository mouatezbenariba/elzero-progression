let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= stop; i -= start % stop) {
  if (i === start) {
    console.log(i);
  } else {
    console.log(`${end}${i}`);
  }
}
