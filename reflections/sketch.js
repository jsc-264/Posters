let rays = []
let numRays = 150

let side


function setup() {
    createCanvas(400, 600);
    colorMode(HSB)
    angleMode(DEGREES)
    stroke(0, 0, 100, 10)
    noFill()


    side = random(["top", "right", "bottom", "left"])
    const sx = random(width)
    const sy = random(height)
    const spacing = 3
    const avgAngle = random(360)
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
        const angle = avgAngle + random(-0.05, 0.05)

        rays.push(new Ray(x, y, angle))


    }

    background(100, 70, 70);

    for (let r of rays) {
        while (r.running) {
            r.update()
        }
        r.render()
        print(r.points.length)
    }



}

// function draw() {
//     background(100, 70, 70);
//     // noLoop()
// }
