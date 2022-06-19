let needle = 'JS';
let haystack = ['PHP', 'JS', 'Python'];

// Write 3 Solutions
if (haystack.includes('JS') === true) {
  console.log('found');
}

if (haystack.includes(needle) === true) {
  console.log('found');
}

if (haystack.indexOf(needle) !== -1) {
  console.log('found');
}
