let str =prompt(`Enter sting`,`hello world`)
let deletLeter =prompt(`first letter to delete`)
let deletLeterT =prompt(`second letter to delete`)



function deletLeterString( str,deletLeter ,deletLeterT){
    let strArray =str.split(``)

    for (let i = 0; i < strArray.length  ; i++) {

        if (deletLeter === `` || deletLeter === null) {
            console.log(`Ви не ввели першу букви для видалення`)
            break
        }else if (strArray[i] === deletLeter) {
            strArray[i] =``
        }
    }

    for (let i = 0; i < strArray.length  ; i++){
        if(deletLeterT === `` ||deletLeterT ===null){
            console.log(`Ви не ввели другу букви для видалення`)
            break
        }else if (strArray[i] === deletLeterT) {
            strArray[i] =``
        }
    }

    let arrayStr = strArray.join(``)
    return arrayStr;
}
let strArray = deletLeterString(str,deletLeter,deletLeterT)
console.log(strArray)
