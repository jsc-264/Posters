const numRays = 500
const spacing = 0
let sx, sy
let startAngle, side

function seedRays() {
    let rays = []


    for (let i = 0; i < numRays; i++) {
        let x, y
        switch (side) {
            case "top":
                x = sx
                y = 0
                break;
            case "right":
                x = width
                y = sy
                break;
            case "bottom":
                x = sx
                y = height
                break;
            case "left":
                x = 0
                y = sy
                break;

            default:
                break;
        }

        let range = 0.1
        let angle = startAngle + random(-range, range)

        rays.push(new Ray(x, y, angle))
    }

    return rays
}

function setup() {
    createCanvas(400, 600);
    colorMode(HSB)
    angleMode(DEGREES)
}

function draw() {
    background(random(360), 70, 70);
    stroke(0, 0, 100, 0.05)
    strokeWeight(5)
    noFill()

    sx = random(width)
    sy = random(height)
    side = random(["top", "right", "bottom", "left"])
    startAngle = random(360)

    let rays = seedRays()

    for (let r of rays) {
        while (r.running) {
            r.update()
        }
        r.render()
    }

    noLoop()
}

function mousePressed() {
    redraw()
}
