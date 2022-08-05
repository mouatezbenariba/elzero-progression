document.querySelector('div').addEventListener('click', function () {
  console.log(`This is :${this.tagName}`);
});

document.querySelector('span').addEventListener('click', function () {
  console.log(`This is :${this.tagName}`);
});

document.querySelector('p').addEventListener('click', function () {
  console.log(`This is :${this.tagName}`);
});

document.querySelector('article').addEventListener('click', function () {
  console.log(`This is :${this.tagName}`);
});

document.querySelector('section').addEventListener('click', function () {
  console.log(`This is :${this.tagName}`);
});
