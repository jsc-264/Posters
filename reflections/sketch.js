function setup() {
    const sx = random(width)
    const sy = random(height)
    const startAngle = random(360)
    const spacing = 0
    let numRays = 500
    let side = random(["top", "right", "bottom", "left"])

    createCanvas(400, 600);
    colorMode(HSB)
    angleMode(DEGREES)

    let rays = []
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



}
