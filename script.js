let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
function addR() {

    alert("Clicked Add Row")
    if(numRows == 0 && numCols == 0){
        let grid = document.getElementById("grid");
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


        let grid = document.getElementById("grid");
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


function addC() {

    alert("Clicked Add Col")
    if(numCols == 0 && numRows == 0){
        let grid = document.getElementById("grid");
        let all = document.querySelectorAll("tr");
        let rowCounter = 0;
        let cell = document.createElement("td");
        initializeCell(cell)
        all[rowCounter].appendChild(cell);
        rowCounter++;
    
        numCols++;
        numRows++
}
}

    else{
        let grid = document.getElementById("grid");
        let all = document.querySelectorAll("tr");
        let rowCounter = 0;

        for(let i = 0; i < numRows; i++) {
            let cell = document.createElement("td");
            initializeCell(cell)
            all[rowCounter].appendChild(cell);
            rowCounter++;
    }
        numCols++;
}