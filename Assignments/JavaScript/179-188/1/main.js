const getData = (link) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.onload = function () {
      if (this.status === 200 && this.readyState === 4) {
        resolve(JSON.parse(request.responseText));
      } else {
        reject(Error('No Data Found'));
      }
    };
    request.open('GET', link);
    request.send();
  });
};


getData('articles.json')
  .then((result) => {
    result.length = 5;
    return result;
  })
  .then((updatedResult) => {
    let div = document.createElement('div');
    for (let i = 0; i < updatedResult.length; i++) {
      div.innerHTML += `<div>
            <h3>${updatedResult[i].title}</h3>
            <p>${updatedResult[i].description}</p>
          </div>`;
    }
    document.body.append(div);
  });

