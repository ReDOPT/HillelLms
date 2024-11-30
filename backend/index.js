const express =require('express')
const cors = require('cors');
const PORT = 4000;

const app = express();
app.use(cors());


let todo = [];

app.get('/todo', (req, res)=>{
    res.json(todo);
});

app.listen(PORT,() => {
    console.log("server STARTED!!!");
});