let myEle01 = document.querySelector('.one');
let myEle02 = document.querySelector('.two');
let holder;

holder = myEle01.innerText;
myEle01.innerText = myEle02.innerText;
myEle01.title = myEle02.title;
myEle02.innerText = holder + ` ${document.querySelectorAll('div').length}`;
myEle02.title = holder;
