// Declare Variables
let input = document.querySelector("input[type='text']");
let submit = document.querySelector("input[type='submit']");
let tasks = document.querySelector('.tasks');
let localArray = [];

// Program
tasks.addEventListener('click', deleteTask);
submit.addEventListener('click', addTask);

if (localStorage.tasks) {
  localArray = JSON.parse(localStorage.tasks);
  localArray.forEach(function (ele) {
    let task = document.createElement('div');
    task.innerHTML = `${ele.title}<button>Delete</button>`;
    task.id = ele.id;
    tasks.appendChild(task);
  });
}

// Functions

function addTask() {
  let task = document.createElement('div');
  task.innerHTML = `${input.value}<button>Delete</button>`;
  tasks.appendChild(task);
  addLocalStorage();
  localStorage.setItem('tasks', JSON.stringify(localArray));
  location.reload();
}

function addLocalStorage() {
  let obj = {
    id: Date.now(),
    title: input.value,
  };
  localArray.push(obj);
}

function deleteTask(evt) {
  if (
    evt.target.parentElement.className === 'tasks' ||
    evt.target.className === 'tasks'
  ) {
    evt.preventDefault();
  } else {
    evt.target.parentElement.remove();
    deleteLocalStorage(evt);
  }
}

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
