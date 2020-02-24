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
  //Add task event
  form.addEventListener('submit', addTask);
}


//Add Task
function addTask(e) {
  if (taskInput.value === ''){
    alert ('add a task');
  }else {
    //Get value in new task and put it in to a li
    let newTask = taskInput.value;
    const li = document.createElement('li');
    li.className = 'collection-item'
    li.textContent = newTask;

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
