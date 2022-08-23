let request = new XMLHttpRequest();
request.open('GET', 'articles.json');
request.send();
request.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4 && this.response) {
    console.log('JSON Object Content Here');
  }
  request.onload = () => {
    console.log('Data Loaded');
  };
  /*
  //  to understand
  if (this.readyState === 0 && this.response) {
    console.log('readyState : 0');
  }
  if (this.readyState === 1 && this.response) {
    console.log('readyState : 1');
  }
  if (this.readyState === 2 && this.response) {
    console.log('readyState : 2');
  }
  if (this.readyState === 3 && this.response) {
    console.log('readyState : 3 / Processing Request'); // true
  }
  if (this.readyState === 4 && this.response) {
    console.log('readyState : 4 / Request Is Finished And Response Is Ready'); // false
  }
  */
};
