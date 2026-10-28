const COLUMNS = 6
const ROWS = 4
let w, h

function setup() {
    createCanvas(600, 400);
    w = width / COLUMNS
    h = height / ROWS
}

function draw() {
    background(0);
    for (let j = 0; j < ROWS; j++) {
        for (let i = 0; i < COLUMNS; i++) {
            const x = w * i
            const y = w * j

            rect(x, y, w, h)
        }
    }
}
