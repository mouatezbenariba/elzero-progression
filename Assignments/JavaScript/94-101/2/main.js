let element = document.querySelector('.element');
let addClass = document.querySelector('input.classes-to-add');
let removeClass = document.querySelector('.classes-to-remove');
let classesDisp = document.querySelector('.classes-list div');

//  This is a Test
addClass.addEventListener('blur', function (e) {
  let d = element.classList.value
    .split(' ')
    .concat(e.target.value.toLowerCase().split(' '));
  // prevent empty class name error
  let bFiltered = d.filter(function (el) {
    return el !== '';
  });
  console.log(bFiltered);
  for (let i = 0; i < bFiltered.length; i++) {
    // display classes
    classesDisp.innerHTML = '';
    element.classList.add(bFiltered[i]);
    for (let i = 0; i < element.classList.length; i++) {
      if (element.classList[i] !== element.classList[element.classList.length]) {
        console.log(`element.classList.length :${element.classList.length}`);
        console.log(`Element classList :${element.classList[i]}`);
        let span = document.createElement('span');
        classesDisp.appendChild(span);
        span.textContent = `${element.classList[i]}`;
        span.className = `${element.classList[i]}`;
        console.log('-----------');
      }
    }
  }
  e.target.value = '';
});

removeClass.addEventListener('blur', function (e) {
  // element.classList.add(e.target.value);
  let b = e.target.value.toLowerCase().split(' ');
  // prevent empty class name error
  let bFiltered = b.filter(function (el) {
    return el !== '';
  });
  for (let i = 0; i < bFiltered.length; i++) {
    if (bFiltered[i] === ' ') {
      continue;
    }
    document.querySelector(`span.${bFiltered[i]}`).remove();
    element.classList.remove(bFiltered[i]);
  }
  if (classesDisp.innerHTML === '') {
    classesDisp.append('No Classes to show');
  }
  e.target.value = '';
});
