class Show {
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  constructor(private _title: string) {}
}

let tester = new Show('Elzero');

console.log(tester.title); // Property 'title' does not exist on type 'Show'
tester.title = 'Osama'; // Property 'title' does not exist on type 'Show'
console.log(tester.title); // Property 'title' does not exist on type 'Show'
