let container = document.getElementById('container');
let color = 'burlywood';
let backgroundColor = 'beige';
//let click = true;

function drawingBoard(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++){
        let newGrid = document.createElement('div');
        newGrid.addEventListener('mouseover', coloring);
        newGrid.style.background = backgroundColor;
        newGrid.classList.add('grid');
        container.appendChild(newGrid);
    }
}

drawingBoard(16);
let form = document.querySelector('#form');
form.addEventListener('input',changeSize);
let sizeInfo = document.querySelector('.size-info');


//adjust drawing board's size
function changeSize(){
    //remove old grids
    let grids = container.querySelectorAll('.grid');
    grids.forEach((e) => e.remove());
    //take size-input and regenerate the board
    let boardSize = document.getElementById('size-input').value;
    drawingBoard(boardSize);
    //update size-info
    sizeInfo.textContent = `${boardSize} x ${boardSize}`;
}

//change color of each grid
function coloring(){
    //if (click){
        if (color === 'rainbow'){
            const randomR = Math.floor(Math.random()*256);
            const randomG = Math.floor(Math.random()*256);
            const randomB = Math.floor(Math.random()*256);
            this.style.background = `rgb(${randomR},${randomG},${randomB})`;
        }else if (color === 'eraser'){
            this.style.background = backgroundColor;
        }else{
            this.style.background = color;
        }
    //}
}
//change color option
function changeColor(colorChoice){
    color = colorChoice;
}

function changeBackgroundColor(choice){
    backgroundColor = choice;
    grids = document.querySelectorAll('.grid');
    let boardSize = document.getElementById('size-input').value;
    for (let i = 0; i < boardSize*boardSize; i++){
        grids[i].style.background = backgroundColor;
    }
}
function reset(){
    let resetBackground = document.querySelector('.background-color');
    resetBackground.value = resetBackground.defaultValue;
    let resetColorPicker = document.querySelector('.color-picker');
    resetColorPicker.value = resetColorPicker.defaultValue;
    backgroundColor = 'beige';
    changeSize();
}
//click to start or stop drawing
/*
document.querySelector('body').addEventListener('click', () =>{
    click = !click;
});
*/







