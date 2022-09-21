'use strict';
const gridContainer = document.querySelector('.grid-container');
const check = document.querySelector('.check');
const gridItem = document.querySelectorAll('.grid-item');
const newGrid = document.getElementById('grid-new');
console.log(gridContainer);

function makeGrid(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  const totalCells = rows * cols;
  for (let cell = 0; cell < totalCells; cell++) {
    let emptyCell = document.createElement('div');
    emptyCell.innerText = cell + 1;
    gridContainer.appendChild(emptyCell).className = 'grid-item';
  }
}

function changeColor() {
  gridContainer.childNodes.forEach((grid) => {
    grid.addEventListener('mouseover', function changeColor(e) {
      e.preventDefault;
      grid.style.backgroundColor = 'red';
    });
  });
}

makeGrid(16, 16);
changeColor();
console.log(gridContainer);

newGrid.addEventListener('click', function (e) {
  const squareN = prompt(
    'Please write the number of squares per side for the new grid.'
  );
  console.log(squareN);
  // clear current makeGrid
  gridContainer.innerHTML = '';
  // make new grid
  makeGrid(squareN, squareN);
  changeColor();
});

const abdal = 'Abdal is cool';
console.log(abdal);
let cheng = 'my name is cheng';
console.log(cheng);
cheng = 'cheng is not cool';
console.log(cheng);
