let container = document.getElementById('container');

function drawingBoard(size){
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++){
        let newGrid = document.createElement('div');
        newGrid.style.background = 'yellow';
        newGrid.style.border = '1px solid black';
        //newGrid.textContent = i;
        container.appendChild(newGrid);
    }
}

drawingBoard(16);
let sizeBtn = document.querySelector('.size-btn');
sizeBtn.addEventListener('click', changeSize);

function changeSize(){
    let grids = container.querySelectorAll('div');
    grids.forEach((e) => e.remove());
    let boardSize = document.getElementById('size-input').value;
    drawingBoard(boardSize);
    console.log('clicked');
}
