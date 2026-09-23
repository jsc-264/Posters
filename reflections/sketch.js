const numRays = 500
const spacing = 0.1
let sx, sy
let startAngle, side
let rays = []


function setup() {
    sx = random(width)
    sy = random(height)
    startAngle = random(360)
    side = random(["top", "right", "bottom", "left"])

    createCanvas(400, 600);
    colorMode(HSB)
    angleMode(DEGREES)

    for (let i = 0; i < numRays; i++) {
        let x, y
        switch (side) {
            case "top":
                x = sx + i * spacing
                y = 0
                break;
            case "right":
                x = width
                y = sy + i * spacing
                break;
            case "bottom":
                x = sx + i * spacing
                y = height
                break;
            case "left":
                x = 0
                y = sy + i * spacing
                break;

            default:
                break;

        }

        let angle = startAngle + random(-0.05, 0.05)

        rays.push(new Ray(x, y, angle))
    }
}

function draw() {
    background(100, 70, 70);
    stroke(0, 0, 100, 0.1)
    noFill()

    for (let r of rays) {
        while (r.running) {
            r.update()
        }
        r.render()
        print(r.points.length)
    }

    noLoop()
}
