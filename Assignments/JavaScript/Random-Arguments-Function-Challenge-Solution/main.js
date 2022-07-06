//  function that accepts three variables as parameters
// name --> string
// age --> number
// status --> boolean

function showDetails(...d) {
  document.write(`<div>`);
  for (let i = 0; i < d.length; i++) {
    typeof d[i] === 'string'
      ? (a = d[i])
      : typeof d[i] === 'number'
      ? (b = d[i])
      : typeof d[i] === 'boolean'
      ? (c = d[i])
      : console.log('There is an Error');
  }
  document.write(`Hello ${a}, Your age is ${b}, `);
  c === true
    ? document.write(`You are available for Hire.`)
    : document.write(`You are not available for Hire.`);
  document.write(`</div>`);
}

showDetails(false, 'mouatez', 25);
showDetails(25, 'mouatez', false);
showDetails(25, false, 'mouatez');
showDetails('mouatez', 25, false);
showDetails('mouatez', 25, true);
showDetails(25, true, 'mouatez');
