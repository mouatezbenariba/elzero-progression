class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  carDescription() {
    return `Car One Name is ${this.n} and Model is ${this.m} and Price is ${this.p}`;
  }
  run() {
    return 'Car is running now';
  }
  stop() {
    return 'Car is stopped';
  }
}

let carOne = new Car('MG', 2022, 420000);
let carTwo = new Car('Peugeot', 2015, 86000);
let carThree = new Car('Renault', 2018, 16000);

console.log(carOne.carDescription());
console.log(carOne.run());

// Needed Output

// ('Car One Name Is MG And Model Is 2022 And Price Is 420000');
// ('Car Is Running Now');
