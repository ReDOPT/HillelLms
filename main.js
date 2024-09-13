let number = prompt(`Enter number`)

if (number===null || number===``){
    console.log(`Hажаль вы не надали число number`)
}

for (let i=1; i<=number;i++) {


    if(number===null){
        console.log(`шкода що ви не захотіли водити число`)
        break
    }else if(number<2){
        console.log(`число не э простим`)
        break
    }else if ( i === 4 || i === 6 ){
        i++
    }


    if( number / i === 1 ) {
        console.log(`число є простим`)
        break
    }else if(number / i === 2){
        console.log(`число не э простим`)
        break
    }
}