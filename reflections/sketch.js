let r

function setup() {
    createCanvas(400, 600);
    colorMode(HSB)
    angleMode(DEGREES)
    stroke(0, 0, 100)
    noFill()

    r = new Ray(0, height / 2)

    background(100, 70, 70);

    while (r.running) {
        r.update()
    }
    r.render()



}

// function draw() {
//     background(100, 70, 70);
//     // noLoop()
// }
