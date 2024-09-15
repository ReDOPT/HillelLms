let arr =[25,true,34,null,26,`rieg`,`rgg`,45,`ngon`,53];

function add(arr){
    let numberOfNumbers=0;
    let sumNumbers = 0;
    for(let i=0 ; i < arr.length ; i++){
        if(/^\d+$/.test(arr[i])){
            sumNumbers=sumNumbers+arr[i];
            numberOfNumbers++
        }else {

        }
    }
    console.log(Math.floor(sumNumbers/numberOfNumbers));
}

let result = add(arr);