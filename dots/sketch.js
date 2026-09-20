const res = 150
const rows = 500

let w
let h

function setup() {
    createCanvas(400, 600);
    textAlign(CENTER, CENTER)
    w = width / res
    h = height / rows
}

function draw() {
    background(220);

    for (let j = 0; j < rows; j++) {
        // noFill()
        beginShape()
        for (let i = 0; i < res; i++) {
            let x = w * i + w / 2
            let y = h * j + h / 2

            let n = noise(x / 100, y / 100)

            const offX = map(n, 0, 1, -w*10, w*10)
            const offY = map(n, 0, 1, -w*10, w*10)

            x += offX
            y += offY

            vertex(x, y)
        }
        endShape()
    }
    noLoop()
}
