let container = document.getElementById('container');
let color = 'black';

function drawingBoard(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++){
        let newGrid = document.createElement('div');
        newGrid.addEventListener('mouseover', coloring);
        newGrid.style.background = 'yellow';
        newGrid.classList.add('grid');
        container.appendChild(newGrid);
    }
}

drawingBoard(16);
let sizeBtn = document.querySelector('.size-btn');
sizeBtn.addEventListener('click', changeSize);

function changeSize(){
    let grids = container.querySelectorAll('.grid');
    grids.forEach((e) => e.remove());
    let boardSize = document.getElementById('size-input').value;
    drawingBoard(boardSize);
    console.log('clicked');
}
function coloring(){
    this.style.background = color;
}

function changeColor(colorChoice){
    color = colorChoice;
}






