const DIM = 5
let cellW, shapeW

function setup() {
    createCanvas(500, 500);
    rectMode(CENTER)
    cellW = width / DIM
    shapeW = cellW/2
}

function draw() {
    background(0);
    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = cellW * i + cellW / 2
            const y = cellW * j + cellW / 2

            rect(x, y, shapeW)
        }
    }
}
