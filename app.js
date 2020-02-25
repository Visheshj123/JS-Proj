//Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

console.log(form)
// Load all event listeners
loadEventListeners();

//load all event loadEventListeners
function loadEventListeners() {
  //DOM load event
  document.addEventListener('DOMContentLoaded',getTasks);

  //Add task event
  form.addEventListener('submit', addTask);

  //Remove Task event
  taskList.addEventListener('click', removeTask);

  //Clear tasks
  clearBtn.addEventListener('click', clearTasks);

  //Filter Tasks
  filter.addEventListener('keyup', filterTasks);
}


//Add Task
function addTask(e) {
  if (taskInput.value === ''){
    alert ('add a task');
  }else {
    //Get value in new task and put it in to a li
    let newTask = taskInput.value;
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.textContent = newTask;

    //Call function to store item in local storage
    storeTaskLocal(taskInput.value);

    //Create delete item for li
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';

    //add icon to delete-item
    link.innerHTML = '<i class = "fa fa-remove"></i>'

    //apend link to li
    li.appendChild(link)


    //append to ul
    taskList.appendChild(li);

    //clear input
    taskInput.value = '';

  }
  e.preventDefault();

}

function removeTask(e){

  //textcontent of li
  console.log(e.target.parentElement.parentElement.textContent);
  taskToRemove = e.target.parentElement.parentElement.textContent;
  tasks = JSON.parse(localStorage.getItem('tasks'));

  //get index in task of e, then remove that index
  console.log(`The index of ${taskToRemove} is ${tasks.indexOf(taskToRemove)}`);
  tasks.splice(tasks.indexOf(taskToRemove), 1);

  localStorage.setItem('tasks', JSON.stringify(tasks.splice(tasks.indexOf(taskToRemove), 1)));

  if(confirm('Are you sure homie?')){
    e.target.parentElement.parentElement.remove();
  }

}

function clearTasks(e){
localStorage.clear()

  if (e.target.classList.contains('clear-tasks')){
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild);
    }

  }
  e.preventDefault();

}

function filterTasks(e){
  const text = document.getElementById('filter').value.toLowerCase();
  document.querySelectorAll('.collection-item')
  .forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){ //-1 if there is no match
      task.style.display = 'block';

    }else{
      task.style.display = 'none';
    }

  });
  e.preventDefault();

}


function storeTaskLocal(taskInput){
  //console.log('called store local task function');
  let tasks;
  if (localStorage.getItem('tasks') == null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(taskInput);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function getTasks(e){
  //get array of tasks in local stoarge
  let tasks;
  if (localStorage.getItem('tasks') == null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
//for each tasks, insert into li and append to taskList
tasks.forEach(function(task){
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.textContent = task;

  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class = "fa fa-remove"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
});

}

/*
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.textContent = newTask;

  //Call function to store item in local storage
  storeTaskLocal(taskInput.value);

  //Create delete item for li
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';

  //add icon to delete-item
  link.innerHTML = '<i class = "fa fa-remove"></i>'

  //apend link to li
  li.appendChild(link)


  //append to ul
  taskList.appendChild(li);
  */
