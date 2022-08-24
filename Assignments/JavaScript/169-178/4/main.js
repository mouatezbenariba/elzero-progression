let request = new XMLHttpRequest();
request.open('GET', 'https://codepen.io/mouatezbenariba/pen/YzaMpxL.js');
request.send();
request.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    let mainData = JSON.parse(request.responseText);
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].category = 'all';
    }
    // mainData Variable Content
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    // UpdatedData Variable Content
    console.log(updatedData);
    let div = document.createElement('div');
    div.id = 'data';

    // Print Infos
    for (let i = 0; i < mainData.length; i++) {
      div.innerHTML += `<div>
          <h2>Name :${mainData[i].name}</h2>
          <p>Content :${mainData[i].content}</p>
          <p>Authpr :${mainData[i].author}</p>
          <p>Category :${mainData[i].category}</p>
          //////////////////////////
        </div>`;
    }
    document.body.append(div);
  }
};
