let input = document.querySelector("input[type='text']");
let submit = document.querySelector("input[type='submit']");
let tasks = document.querySelector('.tasks');
let localArray = [];

function addTask() {
  let task = document.createElement('div');
  let taskText = document.createTextNode(input.value);
  let deleteTask = document.createElement('button');
  let deleteText = document.createTextNode('Delete');

  deleteTask.appendChild(deleteText);
  task.append(taskText, deleteTask);
  tasks.appendChild(task);
  addLocalStorage();
  localStorage.setItem('tasks', JSON.stringify(localArray));
}

function addLocalStorage() {
  let obj = {
    id: Date.now(),
    title: input.value,
  };
  localArray.push(obj);
}

function deleteTask(evt) {
  if (evt.target.parentElement.className === 'tasks') {
    evt.preventDefault();
  } else {
    evt.target.parentElement.remove();
    deleteLocalStorage(evt);
  }
}

tasks.addEventListener('click', deleteTask);

function deleteLocalStorage(evt) {
  let newLocalArray = [];
  for (let i = 0; i < localArray.length; i++) {
    if (evt.target.parentElement.id !== localArray[i].id.toString()) {
      newLocalArray.push(localArray[i]);
    }
  }
  localArray = newLocalArray;
  localStorage.setItem('tasks', JSON.stringify(localArray));
}

// the program
submit.addEventListener('click', addTask);

if (localStorage.tasks) {
  localArray = JSON.parse(localStorage.tasks);
  localArray.forEach(function (ele) {
    let task = document.createElement('div');
    let taskText = document.createTextNode(ele.title);
    let deleteTask = document.createElement('button');
    let deleteText = document.createTextNode('Delete');
    task.id = ele.id;

    deleteTask.appendChild(deleteText);
    task.append(taskText, deleteTask);
    tasks.appendChild(task);
  });
}
