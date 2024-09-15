let str =prompt(`Enter sting`,`hello world`)
let deletLeter =prompt(`first letter to delete`)
let deletLeterT =prompt(`second letter to delete`)

let strArray =str.split(``)

for (let i = 0; i < strArray.length  ; i++) {
    if (deletLeter === `` || deletLeterT === `` || deletLeterT === null) {
        `Ви не ввели букви для видалення`
        break
    }else if (strArray[i] === deletLeter) {
        strArray[i] =``
    }else if (strArray[i] === deletLeterT) {
        strArray[i] =``
    }
}
let arrayStr = strArray.join(``)
console.log(strArray)
console.log(arrayStr)
