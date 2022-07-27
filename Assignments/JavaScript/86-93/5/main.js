let myElement = document.images;

for (let i = 0; i < myElement.length; i++) {
  // let valid = false;
  if (myElement[i].alt === '') {
    myElement[i].setAttribute('alt', 'New Elzero');
  } else {
    myElement[i].setAttribute('alt', 'Old');
  }
}
