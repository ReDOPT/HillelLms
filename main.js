const todoInput = document.querySelector("#inputtodo");
const addTodoBtn = document.querySelector("#btnenter");
const todoList = document.querySelector("#todolist");

let userInput = "";

todoInput.addEventListener('input',(e) =>{
    userInput = e.target.value;
});

addTodoBtn.addEventListener('click',() =>{
    console.log(userInput);
    const newTodo = document.createElement('div');
    newTodo.textContent = userInput;
    newTodo.classList.add('todo');

    todoList.appendChild(newTodo);

    todoInput.value ='';

    const todoBtn = document. createElement('button');
    todoBtn.textContent = 'X';
    todoBtn.classList.add('btn_Enter')
    newTodo.appendChild(todoBtn)

    todoBtn.addEventListener('click', (e)=>{
        console.log(e.target.parentNode);
        e.target.parentNode.remove()
    })
});