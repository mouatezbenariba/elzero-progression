// solution 02

let myDollar = document.querySelector('input');
let myResult = document.querySelector('.result');

myDollar.oninput = function () {
  myResult.innerText = `{${Number(myDollar.value).toFixed(2)}} USD Dollar = {${Number(
    myDollar.value * 15.6
  ).toFixed(2)}} Egyptian Pound`;
};
