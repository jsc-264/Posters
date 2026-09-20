const DIMX = 150
const DIMY = 200

let w
let h

function setup() {
    createCanvas(400, 600);
    textAlign(CENTER, CENTER)
    w = width / DIMX
    h = height / DIMY
}

function draw() {
    background(220);

    for (let j = 0; j < DIMY; j++) {
        for (let i = 0; i < DIMX; i++) {
            let x = w * i + w / 2
            let y = h * j + h / 2

            let n = noise(x / 100, y / 100)

            const offX = map(n, 0, 1, -w * 10, w * 10)
            const offY = map(n, 0, 1, -h * 10, h * 10)

            x += offX
            y += offY

            strokeWeight(1)
            point(x, y)
        }
    }
    noLoop()
}
