// This code is added for understanding
let request = new XMLHttpRequest();
request.open('Get', 'articles.json');
request.send();
// JSON.parse(request.responseText);
request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};
