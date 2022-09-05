// Do Not Edit
type numandstring = number | string;

abstract class Game {
  constructor(public title: string, public price: numandstring) {}
  abstract getLocation(): string;
  abstract getDiscount(): string;
}

// Start Edit And Fix
class RPG extends Game {
  constructor(title: string, public price: numandstring, public rate: number) {
    super(title, price);
  }
  getLocation(): string {
    return 'Discount';
  }
  getDiscount(): string {
    return 'Location';
  }
}

class Action extends Game {
  constructor(
    title: string,
    public price: numandstring,
    public rate: number,
    public company: string
  ) {
    super(title, price);
  }
  getLocation(): string {
    return 'Discount';
  }
  getDiscount(): string {
    return 'Location';
  }
}
// End Edit And Fix

// Do Not Edit
let gameOne = new RPG('Ys', 100, 10);
let gameTwo = new Action('Uncharted', 90, 15, 'Sony');

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"

console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"
