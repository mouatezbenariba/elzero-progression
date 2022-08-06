let div = document.createElement('div');
div.innerText = 10;

let countDown = function () {
  div.innerText -= 1;
  if (div.innerText === '5') {
    window.open(
      'https://elzero.org',
      '_blank',
      'width=400,height=400, left= 600, top: 100 '
    );
  }
  if (div.innerText === '0') {
    clearInterval(counter);
  }
};
let counter = setInterval(countDown, 1000);

document.body.append(div);
