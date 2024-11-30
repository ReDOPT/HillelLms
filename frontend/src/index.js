const apiUrl = 'http://localhost:4000';

async function getTodo() {
    const response = await fetch(`${apiUrl}/todo`);
    const todo = await response.json()
};

getTodo()