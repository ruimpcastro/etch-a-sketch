const container = document.createElement('div');
container.id = 'container';
console.log(container);
const cell = document.createElement('div');
cell.className = 'grid';
console.log(cell);
const body = document.querySelector('body');

function createGrid(){
    body.appendChild(container);
    for(let i = 0; i < 16; i++) {
        for (let j= 0; j< 16; j++) {
            
            const cell = document.createElement('div');
            cell.className = 'grid';
            container.appendChild(cell);
        }
    }
}

createGrid();
console.log(body);