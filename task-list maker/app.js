//Define Variables
const form=document.querySelector('#task-form');
const taskInput=document.getElementById('task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

//load all event listeners

loadEventListeners();


function loadEventListeners(){
form.addEventListener('submit', addTask);
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

    //clear input
    taskInput.value=" ";


    e.preventDefault();
}
