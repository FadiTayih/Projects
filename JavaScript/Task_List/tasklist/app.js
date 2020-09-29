// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {

  // DOM Loaded event call
  document.addEventListener('DOMContentLoaded', getTask);


  // Add task event
  form.addEventListener('submit', addTask);

  // Remove The Item from the list 
  taskList.addEventListener('click', removeItem);

  // Remove All the Items from the List
  clearBtn.addEventListener('click', clearList);

  // Filter the Items
  filter.addEventListener('keyup', filterItems);
}

// Load Items when the DOM is loaded
function getTask(){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task){


  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(task));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);
  })
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);


  // Store to LocalStorage
  storeToLocalStorage(taskInput.value);


  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

// Store to LocalStorage

function storeToLocalStorage(task){

  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Remove each item
function removeItem(e){
  if(e.target.parentElement.classList.contains('delete-item')){

    if(confirm('Sure You Sure?')){

      e.target.parentElement.parentElement.remove();

      // Remove from Local Storage
      removeFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove Items from LocalStorage
function removeFromLocalStorage(taskItem){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task, index){

    if(taskItem.textContent === task){

      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

}



// Remove All the Items
function clearList(e){
  // taskList.innerHTML='';

  // Faster Way
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  // Clear All the Items From LocalStorage
  clearAllItemFromList();
}

// Remove All the Items from LocalStorage

function clearAllItemFromList(){
  localStorage.clear();
}


// Filter the Items
function filterItems(e){

  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;

    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }
    else{
      task.style.display = 'none';
    }
  })


  
}