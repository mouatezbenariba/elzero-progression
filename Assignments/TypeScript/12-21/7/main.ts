// Create Enums + Function Here
function getInsaneLevel(val: number): number {
  return val - 10;
}

enum Game {
  Easy = 100,
  Medium = Easy - 20,
  Hard = Medium - Easy / 2,
  Insane = getInsaneLevel(Hard),
}
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
