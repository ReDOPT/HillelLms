let n = prompt(`number N`)

if (n===null || n===``){
    console.log(`Hажаль вы не надали число N`)
}

let squareOfTheNumber = n*=n
console.log(squareOfTheNumber)
console.log()

for ( let i=1 ; i<=squareOfTheNumber ; i++ ){
    if ( i<= 100 && i%2 === 0 ){
        console.log(i)
    }
}