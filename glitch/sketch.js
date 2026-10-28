const COLS = 4
const ROWS = 6
let cellW, cellH, shapeSize

function randShape(x, y, size, order) {
    const colours = [
        color(255, 0, 0),
        color(0, 255, 0),
        color(0, 0, 255)
    ]

    const scl = map(size, 0, cellW, 2, 10) + (random(2, 5) * random([-1, 1]))

    for (let i = 0; i < order.length; i++) {
        let shape
        switch (order[i]) {
            case "C":
                shape = circle
                break;
            case "R":
                shape = rect
                break;

            default:
                break;
        }

        const col = colours[i]
        const off = (i * scl) - scl

        fill(col)
        shape(x + off, y + off, size)
    }
}

function setup() {
    createCanvas(400, 600);
    blendMode(ADD)
    rectMode(CENTER)
    noStroke()
    frameRate(3)
    cellW = width / COLS
    cellH = height / ROWS
    shapeW = min(cellW, cellH) / 2
}

function draw() {
    background(0);
    for (let j = 0; j < ROWS; j++) {
        for (let i = 0; i < COLS; i++) {
            const x = cellW * i + cellW / 2
            const y = cellH * j + cellH / 2

            let order = []
            for (let i = 0; i < 3; i++){
                order.push(random(["R", "C"]))
            }

            randShape(x, y, shapeW+random(-20, 20), order)
        }
    }
    noLoop()
}
