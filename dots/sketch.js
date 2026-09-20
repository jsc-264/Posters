const res = 150
const rows = 500

let w
let h

let scl = 1.1

function setup() {
    createCanvas(400*scl, 600*scl);
    textAlign(CENTER, CENTER)
    colorMode(HSB)
    w = width / res
    h = height / rows
}

function draw() {
    const hu = random(360)
    const secondHu = (hu + (random(30, 90) * random([-1, 1]))) % 360
    const startC = color(hu, random(60, 90), random(60, 90), 0)
    const endC = color(secondHu, random(60, 90), random(60, 90), 0.3)
    const bgHu = (hu + random(180 - 30, 180 + 30)) % 360

    background(bgHu, 70, 70)

    for (let j = 0; j < rows; j++) {
        const t = map(j, 0, rows - 1, 0, 1)
        const fCol = lerpColor(startC, endC, t)
        const sCol = lerpColor(endC, startC, t)
        fill(fCol)
        stroke(sCol)
        beginShape()
        for (let i = 0; i < res; i++) {
            let x = w * i + w / 2
            let y = h * j + h / 2

            let n = noise(x / 100, y / 100)

            const offX = map(n, 0, 1, -w * 10, w * 10)
            const offY = map(n, 0, 1, -w * 10, w * 10)

            x += offX
            y += offY

            vertex(x, y)
        }
        endShape()
    }
    noLoop()
}

function saveImg() {
    saveCanvas("dots-" + Date.now(), "png")
}

function redo() {
    noiseSeed(random(100))
    redraw()
}

function keyPressed() {
    if (key == " ") {
        redo()
    }

    if (key == "s") {
        saveImg()
    }
}
