fetch('articles.json')
  .then((result) => {
    myData = result.json();
    return myData;
  })
  .then((updatedData) => {
    updatedData.length = 5;
    return updatedData;
  })
  .then((myResult) => {
    let div = document.createElement('div');
    for (let i = 0; i < myResult.length; i++) {
      div.innerHTML += `<div>
            <h3>${myResult[i].title}</h3>
            <p>${myResult[i].description}</p>
          </div>`;
    }
    document.body.append(div);
  });
