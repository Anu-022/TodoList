// function to remove todo
function deleteToDo(eventObject) {
    const deleteBtn = eventObject.target;
    console.log(deleteBtn);
    const li = deleteBtn.parentElement.parentElement.parentElement;
    li.remove();
} 

//function to edit todo
 function editTodo (eventObject) {
   const editBtn = eventObject.target;
   const inputElement = document.querySelector('.todo__input');
   inputElement.value = editBtn.parentElement.parentElement.children[1].innerHTML;
   editBtn.parentElement.parentElement.parentElement.remove();
 }

//function to add eventListener to edit and delete button
    function addEventObject () {
    const buttonCollection = document.querySelectorAll('.delete-btn');
    console.log(buttonCollection);
    const lastButton = buttonCollection[buttonCollection.length - 1];
    lastButton.addEventListener('click', deleteToDo);
    const editBtnCollection = document.querySelectorAll('.edit-btn');
    console.log(editBtnCollection)
    const lastEditBtn = editBtnCollection[editBtnCollection.length - 1];
    lastEditBtn.addEventListener('click', editTodo);
}

//function to display Todo on the screen
function showTodoOnTheScreen(todo) {
const todoList = document.querySelector('#todo_list');
const listItem = document.createElement('li');
listItem.classList.add('todo_list_items')
listItem.innerHTML= `
           <div class="todo_list_tasks">
                <input type="checkbox" class= "todo__checkbox"/>
                <span class="todo__text">${todo}</span> 
                <div> 
                    <button class="todo-actions edit-btn">Edit</button>
                    <button class="todo-actions delete-btn">Delete</button>
               </div>
           </div>   `;
       todoList.appendChild(listItem);
       addEventObject();


}


//Handle todo input
function todoSubmitHandler(e) {
e.preventDefault();
const inputElement = document.querySelector('.todo__input');
const inputValue = inputElement.value;
console.log(inputValue);
showTodoOnTheScreen(inputValue);

inputElement.value = '';
}


const formElement = document.getElementById('form');
formElement.addEventListener('submit', todoSubmitHandler);