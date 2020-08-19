const container = document.getElementById('container')
const resizeButton = document.getElementById('resize')
const clearButton = document.getElementById('clear')
const colorButton = document.getElementById('color')
const title = document.getElementById('title')
let size, answer, color;

function createGrid(size = 16) {
    for(let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;

        for(let j = 0; j < size; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            box.id = 'box' + i;
            row.appendChild(box)
        }
        container.appendChild(row)
    }
}


function draw(e) {
    container.addEventListener('mouseover', function(e) {
        if (e.target.style.background = color) return
        if (e.target.style.background = !color) return e.target.style.background = getRandoColor();
    })
}

function resizeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function getRandoColor() {
    let blue = Math.floor(Math.random() * 256);
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let rgb = `rgb(${red}, ${green}, ${blue})`
    return rgb
}

colorButton.addEventListener('click', function(e) {
    color = prompt('Pick your poison... or color. (red, green, blue or black)')
    if (color === 'red') return e.target.style.background = 'red'
    if (color === 'green') return e.target.style.background = 'green'
    if (color === 'blue') return e.target.style.background = 'blue'
    if (color === 'black') return e.target.style.background = 'black'
})

resizeButton.addEventListener('click', function(e) {
    resizeGrid();
    size = prompt('How big do you want each side? (FYI you\'ll lose all of your work!');
    createGrid(size);
});

clearButton.addEventListener('click', function(e) {
    answer = prompt('Are you sure? (y/n/resize)')
        if(answer === 'n' || !answer) {
            return;
        } else if(answer === 'resize') {
            clearGrid();
            size = prompt('How big do you want each side?');
            createGrid(size);
        } else {
    clearGrid();
    createGrid(size = size)
        }
})


createGrid(size);
draw();
document.body.appendChild(container)

//we need size for the grid
//we can start with a default size, but will need to make it variable so we can change it later
//we need row variables that can be turned into box variables that fit into the grid
//we need to look at color of the grid and ways to modify it
//we need to clear the grid with a button




