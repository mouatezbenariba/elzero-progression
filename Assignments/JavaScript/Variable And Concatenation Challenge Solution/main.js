let cardTitle = 'Elzero',
    cardDescription = 'Elzero Web School',
    cardDate = '25/10';

let mainCard = `
<div>
  <h3>Hello ${cardTitle}</h3>
  <p>${cardDescription}</p>
  <span>${cardDate}</span>
</div>
`;

document.write(mainCard.repeat(4));
