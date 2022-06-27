let index = 10;
let jump = 2;
let end = 0;

for (let i = index; i > end; i -= jump) {
  console.log(i);
  if (i === jump * jump) {
    break;
  }
}
