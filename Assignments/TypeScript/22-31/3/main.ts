interface Superman extends Bird, Man {
  bodyType: string;
  origin: string;
}

// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}

let creature: Superman = {
  title: 'Superman',
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: 'Iron',
  origin: 'Krypton',
};
