//Define Variables
const form=document.querySelector('#task-form');
const taskInput=document.getElementById('task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

//load all event listeners

loadEventListeners();


function loadEventListeners(){
//DOM load event
 document.addEventListener('DOMContentLoaded', getTasks);
form.addEventListener('submit', addTask, addLocalStorage);
//remove task event
taskList.addEventListener('click', removeTask);
//clear tasks
clearBtn.addEventListener('click', clearTask);

}


//get tasks from local storage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
      }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
      }
      tasks.forEach(function(task){
    //create li element
    const li=document.createElement('li');
    //add class
    li.className='collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(task));
    //create new link element
    const link=document.createElement('a');
    //add class
    link.className='delete-item secondary-content';
    //add icon html
    link.innerHTML=`<i class="fa fa-remove"></i>`;
    //append the link
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);

      });

}


//add task
function addTask(e){
    if(taskInput.value===''){
        alert('add a task');
    }
    //create li element
    const li=document.createElement('li');
    //add class
    li.className='collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link=document.createElement('a');
    //add class
    link.className='delete-item secondary-content';
    //add icon html
    link.innerHTML=`<i class="fa fa-remove"></i>`;
    //append the link
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li)

    //store task in local storage
    addLocalStorage(taskInput.value);

    //clear input
    taskInput.value=" ";

    
    e.preventDefault();
}


//remove task function
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
        // remove for LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
}

//remove from LS
function removeTaskFromLocalStorage(taskItem){
    //console.log(taskItem)
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
      }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
      }
     tasks.forEach(function(task, index){
         if(taskItem.textContent===task){
             tasks.splice(index, 1);
         }
     });
     localStorage.setItem('tasks',JSON.stringify(tasks));
}

//clear tasks
function clearTask(addTask){
//  taskList.innerHTML=" "   //this one works too

//while loop is more efficient in removing the items
 while(taskList.firstChild){
     taskList.removeChild(taskList.firstChild);
 }

 //clear from local storage
clearTasksFromLocalStorage();

};

//clear tasks from ls
function clearTasksFromLocalStorage(){
localStorage.clear();
};

//saves it in local storage
function addLocalStorage(task){
    
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
      }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
      }

      
    tasks.push(task);
  
    localStorage.setItem('tasks',JSON.stringify(tasks));
    e.preventDefault();
};

  
