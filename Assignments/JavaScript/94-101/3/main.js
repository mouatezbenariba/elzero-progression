let start = document.createElement('div');

start.className = 'start';
start.setAttribute('title', 'Start Element');
start.setAttribute('data-value', 'Start');
start.textContent = 'Start';

let end = document.createElement('div');

end.className = 'end';
end.setAttribute('title', 'end Element');
end.setAttribute('data-value', 'end');
end.textContent = 'end';

document.querySelector('p').remove();
document.querySelector('.our-element').before(start);
document.querySelector('.our-element').after(end);
