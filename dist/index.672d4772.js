"use strict";
const gridContainer = document.querySelector(".grid-container");
const newGrid = document.getElementById("grid-new");
const gridItem = document.querySelectorAll(".grid-item");
function makeGrid(rows, cols) {
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-cols", cols);
    const totalCells = rows * cols;
    for(let cell = 0; cell < totalCells; cell++){
        let emptyCell = document.createElement("div");
        emptyCell.innerText = cell + 1;
        gridContainer.appendChild(emptyCell).className = "grid-item";
    }
}
// makeGrid (rows, columns)
makeGrid(8, 8);
gridItem.forEach((grid)=>{
    grid.addEventListener("mouseover", function changeColor(e) {
        e.preventDefault;
        grid.style.backgroundColor = "red";
    });
});
newGrid.addEventListener("click", function(e) {
    const squareN = prompt("Please write the number of squares per side for the new grid.");
    console.log(squareN);
    // clear current makeGrid
    gridContainer.innerHTML = "";
    // make new grid
    makeGrid(squareN, squareN);
});

//# sourceMappingURL=index.672d4772.js.map
