for (let i = 1; i <= 100; i++) {
  let myContainer = document.createElement('div');
  let mySeparator = document.createElement('hr');
  let myHeader = document.createElement('h3');
  let paragraph = document.createElement('p');

  let myHeadingText = document.createTextNode(`Name of the product ${i}`);
  let myParagraphText = document.createTextNode(
    'this is the paragraph this is the paragraph this is the paragraph this is the paragraph'
  );

  myContainer.className = 'product';

  myHeader.appendChild(myHeadingText);
  paragraph.appendChild(myParagraphText);
  myContainer.appendChild(myHeader);
  myContainer.appendChild(paragraph);
  myContainer.className = 'product';

  document.body.appendChild(myContainer);

  if (i < 100) {
    document.body.appendChild(mySeparator);
  }
}
