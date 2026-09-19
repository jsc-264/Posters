function blob(x, y, r) {
    push()
    translate(x, y)
    beginShape()
    for (let a = 0; a < 360; a++) {
        const vx = (r + random(1)) * cos(a)
        const vy = (r + random(1)) * sin(a)
        vertex(vx, vy)
    }
    endShape(CLOSE)
    pop()
}

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES)
}

function draw() {
    background(220);

    blob(width/2, height/2, 200)
    noLoop()
}
