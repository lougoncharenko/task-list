//deletes an item from the list
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}

//saves it in local storage
document.querySelector('form').addEventListener('submit', function(e){
  const task=document.getElementById('task').value;
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks));
  alert('Task Saved');
  e.preventDefault();
});


//pulls it out of local storage
const tasks=JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
  console.log(task)
})