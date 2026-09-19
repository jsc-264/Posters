function blob(x, y, r) {
    beginShape()
    for (let a = 0; a < 360; a++) {
        const nx = (r * cos(a) + x) / 200
        const ny = (r * sin(a) + y) / 200
        const nVal = noise(nx, ny)

        const change = map(nVal, 0, 1, -50, 50)
        const pRad = r + change

        const vx = pRad * cos(a) + x
        const vy = pRad * sin(a) + y

        vertex(vx, vy)
    }
    endShape()
}

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES)
}

function draw() {
    background(220);

    blob(width/2, height/2, 100)
    noLoop()
}
