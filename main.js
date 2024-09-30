let company = {
    sales:[
        {name:'John', salary:1000},
        {name:'Alice',salary:600}
    ],
    development:{
        web: [{name:'Peter', salary: 2000},
            {name:'Alex', salary:1800},
        ],
        internals: [{name:'Jack', salary:1300}
        ]
    }
};


function collectSalary(company){
    const colSalary=[];
    add(company)
    function add(item){
        function salaryCollect(adres){

        adres.forEach(item =>{
            colSalary.push(item.salary)
        })

    }
        if (item.sales){
            salaryCollect(item.sales)
            console.log("good")
        }else if(item.web && item.internals){
            console.log("good")
            salaryCollect(item.web)
            salaryCollect(item.internals)
        }

        if(item.development){
            console.log("good")
            add(item.development)
        }

    }
    return colSalary
}
const salary = collectSalary(company)

const sumOfNumbers = salary.reduce((acc, number) => acc + number, 0);
console.log(sumOfNumbers);



