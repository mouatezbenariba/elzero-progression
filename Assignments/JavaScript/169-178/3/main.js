let request = new XMLHttpRequest();
request.open('GET', 'articles.json');
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
  }
};
