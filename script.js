let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
function addR() {

    alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    
    if(numRows == 0 && numCols == 0){
        let newRow = document.createElement("tr")
        let cell = document.createElement("td")
        initializeCell(cell)
        cell.classList.add("uncolored");
        newRow.appendChild(cell);
        grid.appendChild(newRow);
    
    numRows++;
    numCols++;
        
    }
    else{

        let newRow = document.createElement("tr");

        for(let i = 0; i < numCols; i++) {
            let cell = document.createElement("td");
            initializeCell(cell)
            cell.classList.add("uncolored");
            newRow.appendChild(cell);
        }
    
    grid.appendChild(newRow);
    numRows++;
}   

}
