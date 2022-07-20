let container = document.getElementById('container');
let color = 'black';
let click = true;

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
let form = document.querySelector('#form');
form.addEventListener('input',changeSize);
let sizeInfo = document.querySelector('.size-info');

function changeSize(){
    let grids = container.querySelectorAll('.grid');
    grids.forEach((e) => e.remove());
    let boardSize = document.getElementById('size-input').value;
    drawingBoard(boardSize);
    sizeInfo.textContent = `${boardSize} x ${boardSize}`;
}
function coloring(){
    if (click){
        if (color === 'rainbow'){
            const randomR = Math.floor(Math.random()*256);
            const randomG = Math.floor(Math.random()*256);
            const randomB = Math.floor(Math.random()*256);
            this.style.background = `rgb(${randomR},${randomG},${randomB})`;
        }else{
            this.style.background = color;
        }
    }
}

function changeColor(colorChoice){
        color = colorChoice;
}

document.querySelector('body').addEventListener('click', () =>{
    click = !click;
});








