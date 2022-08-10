let inputOne = document.querySelector('input[name = input-1]');
let inputTwo = document.querySelector('input[name = input-2]');
let inputThree = document.querySelector('input[name = input-3]');
let list = document.querySelector('select');
let submit = document.querySelector('input[type = submit]');
let array;

if (window.sessionStorage.userInputs !== undefined) {
  fetchSessionStorage();
}

submit.onclick = function () {
  addSessionStorage();
};

function addSessionStorage() {
  array = [];
  let obj = {
    inp1: `${inputOne.value}`,
    inp2: `${inputTwo.value}`,
    inp3: `${inputThree.value}`,
    myList: `${list.value}`,
  };
  array.push(obj);
  window.sessionStorage.setItem('userInputs', JSON.stringify(array));
}

function fetchSessionStorage() {
  array = JSON.parse(window.sessionStorage.userInputs);
  inputOne.value = array[0].inp1;
  inputTwo.value = array[0].inp2;
  inputThree.value = array[0].inp3;
  list.value = array[0].myList;
}
