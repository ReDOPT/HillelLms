const todoInput = document.querySelector(".js--form__input");
const addTodoBtn = document.querySelector(".form__btn");
const todoList = document.querySelector(".js--todos-wrapper");

let userInput = "";


let todoSave = JSON.parse(localStorage.getItem('todo-save')) || [];


function createTodoItem(todoText, isChecked) {
    const newTodo = document.createElement('li');
    newTodo.classList.add("todo-item");


    const inputChecBox = document.createElement("input");
    inputChecBox.type = "checkbox";
    inputChecBox.checked = isChecked;


    const spanTodo = document.createElement("span");
    spanTodo.classList.add("todo-item__description");
    spanTodo.textContent = todoText;

    if (isChecked) {
        spanTodo.classList.add("todo-item--checked");
    }

    inputChecBox.addEventListener("change", (e) => {
        if (e.target.checked) {
            spanTodo.classList.add("todo-item--checked");
        } else {
            spanTodo.classList.remove("todo-item--checked");
        }
        saveTodoToLocalStorage();
    });

    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("todo-item__delete");
    buttonDelete.textContent = "видалити";

    buttonDelete.addEventListener('click', (e) => {
        e.target.parentNode.remove();
        deleteTodoFromLocalStorage(todoText);
    });

    newTodo.appendChild(inputChecBox);
    newTodo.appendChild(spanTodo);
    newTodo.appendChild(buttonDelete);
    todoList.appendChild(newTodo);
}


addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (userInput.trim() !== "") {
        createTodoItem(userInput, false);
        todoSave.push({ text: userInput, checked: false });
        saveTodoToLocalStorage();
        userInput = "";
        todoInput.value = "";
    }
});


todoInput.addEventListener('input', (e) => {
    userInput = e.target.value;
});


function saveTodoToLocalStorage() {
    localStorage.setItem('todo-save', JSON.stringify(todoSave));
}


function deleteTodoFromLocalStorage(todoText) {
    todoSave = todoSave.filter(todo => todo.text !== todoText);
    saveTodoToLocalStorage();
}


function loadTodos() {
    todoSave.forEach(todo => {
        createTodoItem(todo.text, todo.checked);
    });
}


loadTodos();