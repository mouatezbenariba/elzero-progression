let start = 1;
let end = 6;
let breaker = 2;

for (let i = start; i <= end; i += start) {
  console.log(i);
  for (p = breaker; p < end; p += breaker) {
    console.log(`-- ${p}`);
  }
}
