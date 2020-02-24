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

function removeTask(e){
  if(e.target.parentElement.parentElement.className == 'collection-item'){
    if(confirm('Are you sure homie?')){
      e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
  }
}

function clearTasks(e){

  if (e.target.classList.contains('clear-tasks')){
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild);
    }

  }

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
