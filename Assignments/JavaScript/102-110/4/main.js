let div = document.createElement('div');
div.innerText = 10;

let countDown = function () {
  div.innerText -= 1;
  if (div.innerText === '0') {
    clearInterval(counter);
    location.replace('https://elzero.org');
  }
};

let counter = setInterval(countDown, 1000);

document.body.append(div);
