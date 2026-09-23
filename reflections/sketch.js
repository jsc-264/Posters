let rays = []

function setup() {
    createCanvas(400, 600);
    colorMode(HSB)
    angleMode(DEGREES)
    stroke(0, 0, 100)
    noFill()

    const avgAngle = random(360)
    for (let i = 0; i < 10; i++) {
        const [x, y] = getStartCoords()
        const x = 0
        const y = i * 10 + 50
        const angle = avgAngle

        rays.push(new Ray(x, y, angle))


    }

    background(100, 70, 70);

    for (let r of rays) {
        while (r.running) {
            r.update()
        }
        r.render()
    }



}

// function draw() {
//     background(100, 70, 70);
//     // noLoop()
// }
