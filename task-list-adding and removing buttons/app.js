document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}