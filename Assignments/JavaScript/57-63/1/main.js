function sayHello(theName, theGender) {
  let a = '';
  if (theGender == 'Male') {
    a = 'Mr';
  } else if (theGender == 'Female') {
    a = 'Miss';
  }
  document.write(`<p>Hello ${a} ${theName}</p>`);
}

sayHello('Osama', 'Male'); // "Hello Mr Osama"
sayHello('Eman', 'Female'); // "Hello Miss Eman"
sayHello('Sameh'); // "Hello Sameh"
