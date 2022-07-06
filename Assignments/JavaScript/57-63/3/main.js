function ageInTime(theAge) {
  // Your Code Here
  if (theAge < 10 && theAge > 100) {
    console.log('Age Out Of Range');
  } else {
    theAge = theAge * 12;
    console.log(`${Math.trunc(theAge)} Months`);
    theAge = theAge * 4.34524;
    console.log(`${Math.trunc(theAge)} Weeks`);
    theAge = theAge * 7;
    console.log(`${Math.trunc(theAge)} Days`);
    theAge = theAge * 24;
    console.log(`${Math.trunc(theAge)} Hours`);
    theAge = theAge * 60;
    console.log(`${Math.trunc(theAge)} Minutes`);
    theAge = theAge * 60;
    console.log(`${Math.trunc(theAge)} Seconds`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
