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

function addTask(event) {
  // prevent from blank and whitespace Inputs
  if (typeof input.value === 'string' && Number(input.value) === 0) {
    event.preventDefault();
  } else {
    let task = document.createElement('div');
    task.innerHTML = `${input.value}<button>Delete</button>`;
    tasks.appendChild(task);
    addLocalStorage();
    localStorage.setItem('tasks', JSON.stringify(localArray));
    location.reload();
  }
}

function addLocalStorage() {
  let obj = {
    id: Date.now(),
    title: input.value,
  };
  localArray.push(obj);
}

function deleteTask(event) {
  if (
    event.target.parentElement.className === 'tasks' ||
    event.target.className === 'tasks'
  ) {
    event.preventDefault();
  } else {
    event.target.parentElement.remove();
    deleteLocalStorage(event);
  }
}

function deleteLocalStorage(event) {
  let newLocalArray = [];
  for (let i = 0; i < localArray.length; i++) {
    if (event.target.parentElement.id !== localArray[i].id.toString()) {
      newLocalArray.push(localArray[i]);
    }
  }
  localArray = newLocalArray;
  localStorage.setItem('tasks', JSON.stringify(localArray));
}
