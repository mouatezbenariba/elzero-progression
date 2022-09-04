class Shorten {
  constructor(public id: number, public username: string, public title: string) {}
}

let tester = new Shorten(100, 'Elzero', 'Developer');

console.log(tester.id);
console.log(tester.username);
