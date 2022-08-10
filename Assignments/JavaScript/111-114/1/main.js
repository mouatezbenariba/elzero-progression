let fontName = document.getElementById('font-name');
let color = document.getElementById('color');
let fontSize = document.getElementById('font-size');
let textarea = document.querySelector('textarea');
let array = [];

// if (window.localStorage) {
// }

if (window.localStorage.Infos !== undefined) {
  fetchLocalStorage();
}
textarea.oninput = function () {
  applyStyle();
  addLocalStorage();
};

// function
function applyStyle() {
  textarea.style.cssText = `margin-top : 1rem; font-family:
${fontName.value}, sans-serif; color : ${color.value}; font-size : ${Number(
    fontSize.value
  )}px`;
}

function addLocalStorage() {
  array = [];
  let obj = {
    fontF: `${fontName.value}`,
    colorF: `${color.value}`,
    fontS: `${Number(fontSize.value)}`,
  };
  array.push(obj);
  window.localStorage.setItem('Infos', JSON.stringify(array));
}

function fetchLocalStorage() {
  array = JSON.parse(localStorage.Infos);
  fontName.value = array[0].fontF;
  color.value = array[0].colorF;
  fontSize.value = array[0].fontS;
}
