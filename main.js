let stringnamber =prompt("enter a five-digit number");
let realnumber = +stringnamber

let thirdnumber =realnumber % 10
let secondnumber =Math.floor(realnumber / 10 % 10)
let firstnumber =Math.floor(realnumber / 100 % 10)

if(thirdnumber === secondnumber && thirdnumber === firstnumber ){
    console.log(`Всі цифри однакові`)
}else if(
    thirdnumber === secondnumber || thirdnumber === firstnumber || secondnumber === firstnumber
) {
    console.log(`є однакові цифри`)

}else {
    console.log(`немає однакових цифр`)
}



console.log( realnumber);