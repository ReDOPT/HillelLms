const express =require('express')
const cors = require('cors');
const PORT = 4000;

const app = express();
app.use(cors());
app.use(express.json())

let todo = [];

app.get('/todo', (req, res)=>{
    res.json(todo);
});

app.post('/todo', (req, res)=>{
    const newTodo ={...req.body,
        id: todo.length + 1,
        readiness: false,
    }

    todo.push(newTodo);

    res.status(200).json(newTodo)

});

app.delete('/todo/:id', (req, res) => {
    const { id } = req.params;
    const todoIndex = todo.findIndex((t) => t.id === +id);

    if (todoIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    todo.splice(todoIndex, 1); // Удаление задачи
    res.status(200).json({ message: 'Task deleted' });
});

app.put('/todo/:id', (req, res) => {
    const { id } = req.params;
    const { readiness } = req.body;

    const task = todo.find((t) => t.id === +id);

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    task.readiness = readiness ?? task.readiness;
    res.status(200).json(task);
});

app.listen(PORT,() => {
    console.log("server STARTED!!!");
});