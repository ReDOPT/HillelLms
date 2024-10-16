
const message ={};

function validateForm() {
    isValid = true ;

    if(!message.userName){
        document.querySelector("#name_error").innerHTML ="Name is a required field!";
        isValid = false;
    }

    if(!/^.{5,}$/.test(message.userMessage)){
        document.querySelector("#message_error").innerHTML ="message is a required field!";
        isValid = false;
    }

    if(!/^\+380\d{9}$/.test(message.userePhone)){
        document.querySelector("#number_error").innerHTML ="Number is a required field!";
        isValid = false;
    }

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(message.userEmail)){
        document.querySelector("#emeil_error").innerHTML ="Email is a required field!";
        isValid = false;
    }

    return isValid
}

function cler(){
    document.querySelector("#name_error").innerHTML ="";
    document.querySelector("#number_error").innerHTML ="";
    document.querySelector("#emeil_error").innerHTML ="";
    document.querySelector("#message_error").innerHTML ="";
}

document.querySelector("#form").addEventListener('submit',(e)=>{
    e.preventDefault()

    cler()

    message.userName = document.querySelector("#message_name").value
    message.userMessage = document.querySelector("#message__m").value
    message.userePhone = document.querySelector("#message__number").value
    message.userEmail = document.querySelector("#message__emeil").value

    if(validateForm()){
        console.log(message)
    }else {

    }
})