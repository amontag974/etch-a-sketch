const container = document.querySelector('.container');

function createGrid(numberOfCells=16) {
    setGridArea(numberOfCells);
    createCells(numberOfCells);
    const cells = document.querySelectorAll('.cell');
    changeToBlack();
}

function checkIfValidInput(numberOfCells) {
    while (numberOfCells % 1 != 0 ) {
        numberOfCells = prompt("Invalid option. Please provide a whole number");
    }
    numberOfCells = emptyWidth(numberOfCells);
    return numberOfCells;
}

function createCells(numberOfCells) {
    for(i = 0; i < numberOfCells**2; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div);
    }
}

function changeColor() {    
    if (colorButton.textContent == "COLOR") {
        changeToColor();      
    } else {
        changeToBlack();
    }
}

function changeToColor() {
    const cells = document.querySelectorAll('.cell');

    colorButton.textContent = "BLACK";
    cells.forEach(cell => cell.classList.remove('filled-black'));
    cells.forEach(cell => cell.removeEventListener('mouseover',fillBlack));
    cells.forEach(cell => cell.addEventListener('mouseover', fillColor)); 
}

function changeToBlack(){
    const cells = document.querySelectorAll('.cell');

    colorButton.textContent = "COLOR";
    cells.forEach(cell => cell.classList.remove('filled-color'));
    cells.forEach(cell => cell.removeEventListener('mouseover',fillColor));
    cells.forEach(cell => cell.style.backgroundColor = "");
    cells.forEach(cell => cell.addEventListener('mouseover', fillBlack));
}

function setGridArea(numberOfCells) {
    container.style.gridTemplateColumns = "repeat(" + numberOfCells + ", 1fr";
    container.style.gridTemplateRows = "repeat(" + numberOfCells + ", 1fr)";
}

function fillBlack(e) {
    e.target.classList.add('filled-black');
}

function fillColor(e) {
    e.target.style.backgroundColor = "#" + (Math.floor(Math.random()*16777215).toString(16));
    e.target.classList.add('filled-color');
}

function resetSketch() {
    let widthInCells = prompt("How many cells wide should the grid be?");
    widthInCells = checkIfValidInput(widthInCells);
    removeCells();
    createGrid(widthInCells);
}

function emptyWidth(widthInCells){
    if (widthInCells == null) {
        return 16;
    } return widthInCells;
}

function removeCells() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.remove());
}

const resetButton = document.querySelector('.reset');
const colorButton = document.querySelector('.color');

createGrid();

resetButton.addEventListener('click', resetSketch);
colorButton.addEventListener('click', changeColor);


