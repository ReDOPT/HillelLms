const apiUrl = 'http://localhost:4000';


async function getTodo() {
    const response = await fetch(`${apiUrl}/todo`);
    const todo = await response.json();

    rendertodo(todo);
}

getTodo();


async function TodoDelete(todoId) {
    await fetch(`${apiUrl}/todo/${todoId}`, {
        method: 'DELETE',
    });

    await getTodo();
}


async function markTodoAsCompleted(todoId, readiness) {
    await fetch(`${apiUrl}/todo/${todoId}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            readiness,
        }),
    });

    await getTodo();
}


async function pushTodo(e) {
    e.preventDefault();

    const todo = document.querySelector('.js--form__input').value;

    await fetch(`${apiUrl}/todo`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            todo,
        }),
    });

    document.querySelector('.js--form__input').value = '';
    getTodo();
}

function rendertodo(todo) {
    const todoList = document.querySelector('.todo__ul--js');
    todoList.innerHTML = ''; // Очищаем список перед рендерингом

    todo.forEach((task) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo__li';

        if (task.readiness) {
            todoItem.classList.add('completed');
        }

        todoItem.innerHTML = `
            <span>${task.todo}</span>
            <div>
                <button class="edit">Completed</button>
                <button class="delete" data-id="${task.id}">X</button>
            </div>
        `;

        todoList.appendChild(todoItem);


        const deleteButton = todoItem.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            TodoDelete(task.id);
        });


        const completeButton = todoItem.querySelector('.edit');
        completeButton.addEventListener('click', () => {
            markTodoAsCompleted(task.id, !task.readiness); // Переключение статуса
        });
    });
}

document.querySelector('.form--js').addEventListener('submit', pushTodo);