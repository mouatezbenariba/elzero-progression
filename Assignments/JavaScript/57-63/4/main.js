function checkStatus(...d) {
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

checkStatus(false, 'mouatez', 25);
checkStatus(25, 'mouatez', false);
checkStatus(25, false, 'mouatez');
checkStatus('mouatez', 25, false);
checkStatus('mouatez', 25, true);
checkStatus(25, true, 'mouatez');
