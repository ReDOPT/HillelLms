let stringnamber =prompt("enter a five-digit number");
let realnumber = +stringnamber

let fifthnumber =realnumber % 10
let forthnumber = Math.floor(realnumber / 10 % 10)
let thirdnumber=Math.floor(realnumber / 100 % 10)
let secondnumber =Math.floor(realnumber / 1000 % 10)
let firstnumber =Math.floor(realnumber / 10000 % 10)

console.log( realnumber);
console.log(fifthnumber);
console.log(forthnumber);
console.log(thirdnumber);
console.log(secondnumber);
console.log(firstnumber);
console.log('${realnumber} ${fifthnumber} ${forthnumber} ${thirdnumber} ${secondnumber} ${firstnumber}')