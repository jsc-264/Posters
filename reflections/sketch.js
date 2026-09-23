let start

function setup() {
    createCanvas(400, 600);
    colorMode(HSB)
    start = height/2
    fill(0, 0, 100)
    noStroke()
}

function draw() {
    background(100, 70, 70);
    circle(0, start, 5)
    // noLoop()
}
