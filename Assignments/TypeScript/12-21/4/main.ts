function yesOrNo(val: number | string) {
  if (typeof val === 'string') {
    return 'Error';
  }
  return val > 29 ? true : false;
}

// Do Not Edit Here
console.log(yesOrNo('100')); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
