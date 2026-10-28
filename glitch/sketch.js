const DIMX = 4
const DIMY = 6
const factor = 10

const COLS = DIMX * factor
const ROWS = DIMY * factor
let cellW, cellH, minDim

function randShape(x, y, n) {
    const colours = [
        color(200, 0, 0),
        color(0, 200, 0),
        color(0, 0, 200)
    ]

    let order = ["R", "R", "R"]

    let maxI = round(map(n, 0, 1, 0, order.length))

    for (let i = 0; i < maxI; i++) {
        order[i] = "C"
    }

    const size = map(n, 0, 1, minDim/3, minDim * 1.3)

    let scl = map(size, 1, minDim, -30, 30)

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
        let a = map(n, 0, 1, 0, PI / 2)

        push()
        translate(x, y)
        rotate(a)
        fill(col)
        shape(off, off, size)
        pop()
    }
}

function setup() {
    createCanvas(400, 600);
    rectMode(CENTER)
    noStroke()
    frameRate(3)
    cellW = width / COLS
    cellH = height / ROWS
    minDim = min(cellW, cellH)
}

function draw() {
    background(0);
    blendMode(ADD)
    for (let j = 0; j < ROWS; j++) {
        for (let i = 0; i < COLS; i++) {
            const x = cellW * i + cellW / 2
            const y = cellH * j + cellH / 2

            // const div = map(COLS*ROWS, 4, 4000, 1, 100)
            const n = noise(i / 30, j / 30)
            randShape(x, y, n)
        }
    }
    filter(BLUR, 0);
    blendMode(BLEND)
    noLoop()
}

function keyPressed() {
    if (key == " ") {
        noiseSeed(random(10000))
        redraw()
    }
}
