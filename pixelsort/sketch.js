const DIM = 10
let w

function setup() {
    createCanvas(500, 500);
    w = width / DIM
}

function draw() {
    background(50);

    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            const x = i * w
            const y = j * w
            rect(x, y, w)
        }
    }
}
