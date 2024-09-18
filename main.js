function inputuser() {
    for (let i = 1 ; i <= 10;i++){
        let userPromt =prompt()

        if(userPromt>100){
            return userPromt
            break
        }else if(i === 9){
            alert(`у вас осталась одна попытка`)
        }else{
            alert("ne virno")
        }
    }
}
console.log(inputuser())