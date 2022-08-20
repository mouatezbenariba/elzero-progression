class User {
  constructor(userName, salary, availability) {
    this.u = userName;
    this.s = salary;
    this.a = availability;
  }
  myMessage() {
    return `My name is : ${this.u}. My salary is : ${this.s} and I am ${this.a}`;
  }
}

userOne = new User('mouatez', 2000, 'available');

class Admin extends User {
  // #myResponsibility();
  constructor(userName, salary, availability, responsibility) {
    super(userName, salary, availability);
    this.r = responsibility;
  }
  #myResponsibility() {
    return `${this.r} Level`;
  }
  myJob() {
    return this.#myResponsibility() + `wow`;
  }
}

userTwo = new Admin('aya', 3000, 'not available', 25);

console.log(userTwo.myJob());
