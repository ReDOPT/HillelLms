const apiUrl = 'http://localhost:4000';

async function getTodo() {
    const response = await fetch(`${apiUrl}/todo`);
    const todo = await response.json()
};

getTodo()

const ul = document.querySelector(".form__ul--js")
const input = document.querySelector(".js--form__input").addEventListener('input', (e)=>{
    userInput = e.target.value;
});

let todoSave = JSON.parse(localStorage.getItem('todo-save')) || [];

let userInput = "" ;

function ulBild() {

}

document.querySelector(".form__btn--js").addEventListener('click',(e)=>{
   e.preventDefault()

    if(userInput.trim() !== ""){
        ulBild(userInput,false);

    }
});

function saveTodoToLocalStorage() {
    localStorage.setItem('todo-save', JSON.stringify(todoSave));
}