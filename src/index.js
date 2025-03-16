document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //getting form element
  let form = document.querySelector('form');
  //adding eventlistener submit
  form.addEventListener('submit', (e)=>{
    //prevents form submission
    e.preventDefault(); 
     //getting task description form
    let taskDescription=e.target.querySelector('#new-task-description').value
    //calling function
    buildNewTask(taskDescription)
    //reseting the form 
    form.reset();

  });  
  });

  function  buildNewTask(taskDescription){
    //lets create a new list item
    let taskItem= document.createElement('li')
    let taskList = document.getElementById('tasks')
//creating a delete button 'x'
let deleteButton = document.createElement('button')
deleteButton.textContent= 'x';
deleteButton.addEventListener('click', handleDelete)
taskItem.textContent = taskDescription;
taskItem.appendChild(deleteButton);
taskList.appendChild(taskItem)

//styling the x button 
deleteButton.style.color = 'red';
deleteButton.style.fontSize = '12px';
deleteButton.style.cursor = 'pointer';

  }
  
function handleDelete(e){
  //removing parent list item
e.target.parentNode.remove();
}