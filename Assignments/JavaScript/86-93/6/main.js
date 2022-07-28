let numEle = document.querySelector('input[name = elements]');
let typeEle = document.querySelector('select[name = type]');
let subButt = document.querySelector('input[type = submit]');
let myResult = document.querySelector('.results');
let textBox = document.querySelector('input[type = text]');

subButt.onclick = function () {
  myResult.innerHTML = '';
  for (let i = 1; i <= numEle.value; i++) {
    let text = document.createTextNode(textBox.value);
    let myEle1 = document.createElement('div');
    myEle1.className = 'box';
    myEle1.setAttribute('title', 'Element');
    myEle1.id = `id-${i}`;

    let myEle2 = document.createElement('section');
    myEle2.className = 'box';
    myEle2.setAttribute('title', 'Element');
    myEle2.id = `id-${i}`;

    console.log('Loop!');
    if (typeEle.value === 'Div') {
      myEle1.appendChild(text);
      console.log('div!');
      myResult.appendChild(myEle1);
    }
    if (typeEle.value === 'Section') {
      myEle2.appendChild(text);
      console.log('section!');
      myResult.appendChild(myEle2);
    }
  }
};

document.forms[0].onsubmit = function (e) {
  e.preventDefault();
};
