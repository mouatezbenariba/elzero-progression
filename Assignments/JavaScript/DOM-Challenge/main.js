let div = document.createElement('div');

// start header
let container = document.createElement('div');
container.className = 'container';

let myHeader = document.createElement('header');

let logo = document.createElement('div');
logo.className = 'logo';
logo.textContent = 'Elzero';

let menu = document.createElement('ul');
menu.className = 'menu';

for (let i = 0; i < 4; i++) {
  let listItem = document.createElement('li');
  let menuText = ['Home', 'About', 'Service', 'Contact'];
  menu.appendChild(listItem);
  listItem.textContent = menuText[i];
}

container.appendChild(myHeader);
myHeader.appendChild(logo);
myHeader.appendChild(menu);
document.body.append(container);

let listItem = document.querySelectorAll('ul li');

container.style.cssText = 'width: calc(100% - 4rem); margin: auto';
myHeader.style.cssText =
  'display: flex; justify-content: space-between; align-items: center;';
menu.style.cssText = 'display: flex; list-style: none;';

for (let i = 0; i < listItem.length; i++) {
  listItem.item(i).style.cssText = 'padding-left: 1rem;';
}

logo.style.cssText = 'font-weight: bold; color: #58b27a;';
// end header
// start content
let content = document.createElement('main');
container.append(content);

for (let i = 1; i < 16; i++) {
  let block = div.cloneNode();
  let blockNum = document.createElement('span');
  let blockProduct = document.createTextNode('Product');
  blockNum.textContent = `${i}`;
  blockNum.style.cssText = 'font-size : 1.2rem; font-weight : bold';
  content.appendChild(block);
  block.append(blockNum, blockProduct);
}

content.style.cssText =
  'display: grid; grid-template-columns: repeat(3, 1fr); grid-gap :1rem ;padding : 1rem ;background-color : #ececec; font-size : 0.7rem';

let products = document.querySelectorAll('main div');

for (let i = 0; i < products.length; i++) {
  products[i].style.cssText =
    'display: flex; flex-direction: column; justify-content: center; height: 5rem; text-align: center; background-color : white';
}
// end content
// start footer
let footer = document.createElement('footer');
container.appendChild(footer);
footer.textContent = 'Copyright 2021';

footer.style.cssText =
  'background-color: #23a96e; padding: 0.5rem ; text-align: center; color: white;';
// end footer
