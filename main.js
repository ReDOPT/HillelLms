function createTable(createNumber) {
    const table = document.createElement("table");

    table.style.borderCollapse = "collapse";
    table.style.width = "20%";
    table.style.textAlign = "center";
    table.style.marginTop = "20px";

    for (let i = 1; i < createNumber; i++) {
        const row = document.createElement("tr");

        for (let j = 1; j < createNumber; j++) {
            let cell
            if (i === 0 &&  j === 0){
                cell = document.createElement("td");
                cell.textContent ='x'
            }else if (i === 0){
                cell = document.createElement("td");
                cell.textContent = i ;
            }else if (j === 0){
                cell = document.createElement("td")
                cell.textContent = j ;
            }else {
                cell = document.createElement("td");
                cell.textContent = j * i ;
            }

            if (i*i <= i*j &&(i*j) % 2 ===0 && j % 2 ===0){
                cell.style.backgroundColor = "red";
            }else if (j*j <= i*j && i % 2 ===0 && i % 2 ===0){
                cell.style.backgroundColor = "red";
            }



            cell.style.border = "1px solid black";
            cell.style.padding = "10px";
            cell.style.width = "50px";
            cell.style.height = "50px";

            row.appendChild(cell)
        }
        table.appendChild(row);
    }
    return table

}

document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById('table-container');
    if (tableContainer) {
        const pifagorTable = createTable(10);
        tableContainer.appendChild(pifagorTable);
    }
});
