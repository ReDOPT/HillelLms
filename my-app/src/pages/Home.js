import { useState } from 'react';

function Home() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo.trim()]);
            setNewTodo('');
        }
    };

    return (
        <div>
            <h1>Список TODO</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Додати завдання"
            />
            <button onClick={addTodo}>Додати</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;