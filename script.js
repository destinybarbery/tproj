
let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
function addR() {

    alert("Clicked Add Row")
    
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i = 0; i < amountofColumns; i++) {
        let cell = document.createElement("td");
        initializeCell(cell)
        cell.classList.add("uncolored");
        newRow.appendChild(cell);
    }
    mainGrid.appendChild(newRow);
    amountofRows++;

}


function addC() {

    alert("Clicked Add Col")

      let mainGrid = document.getElementById("main-grid");
    let allRows = document.querySelectorAll("tr");
    let rowCounter = 0;

    for(let i = 0; i < amountofRows; i++) {
        let cell = document.createElement("td");
        initializeCell(cell)
        allRows[rowCounter].appendChild(cell);
        rowCounter++;
    }
    amountofColumns++;
}