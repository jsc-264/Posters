const DIM = 5
let cellW, shapeW

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
    createCanvas(500, 500);
    rectMode(CENTER)
    blendMode(ADD)
    noStroke()
    cellW = width / DIM
    shapeW = cellW / 2
}

function draw() {
    background(0);
    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = cellW * i + cellW / 2
            const y = cellW * j + cellW / 2

            randShape(x, y, shapeW+random(-40, 40), ["R", "R", "R"])
        }
    }
    noLoop()
}
