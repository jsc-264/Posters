const DIMX = 15
const DIMY = 20

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
            const x = w * i + w/2
            const y = h * j + h/2

            strokeWeight(5)
            point(x, y)
        }
    }
}
