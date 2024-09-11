let number = prompt(`Enter number`)

let detector=null

for (let i=1; i<=7;i++) {
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
        detector =true
        console.log(`число є простим`)
        break
    }else  {
         detector =false

    }
}

if (detector===false){
    console.log(`число не э простим`)
}