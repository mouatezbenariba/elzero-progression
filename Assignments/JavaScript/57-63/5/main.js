function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (startYear; startYear <= endYear; startYear++) {
    document.write(`<option value= "${startYear}">${startYear}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
