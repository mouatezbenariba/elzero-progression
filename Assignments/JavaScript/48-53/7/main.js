let start = 0;
let mix = [1, 2, 3, 'A', 'B', 'C', 4];

for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] === 'string' || mix[i] === mix[start]) {
    continue;
  }
  console.log(mix[i]);
}
