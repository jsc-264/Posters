function blob(x, y, r, i, sc, ec, points=20) {
    const t = map(i, 0, blobs-1, 0, 1)
    const col = lerpColor(sc, ec, t)
    stroke(col)
    beginShape()
    for (let a = 0; a < 360; a += 360 / points) {
        // we cant use translate here cause noise values must be positive
        const nx = (r * cos(a) + x) / 200
        const ny = (r * sin(a) + y) / 200
        const nVal = noise(nx, ny)

        // calculating offset and adding it to radius
        const off = map(nVal, 0, 1, -r, r)
        const newR = r + off

        // polar to cartesian coords
        const vx = newR * cos(a) + x
        const vy = newR * sin(a) + y

        vertex(vx, vy)
    }
    endShape(CLOSE)
}

const scl = 1.3
const blobs = 500

let cx, cy

function setup() {
    createCanvas(400 * scl, 500 * scl);
    angleMode(DEGREES)
    colorMode(HSB)

    cx = random(width)
    cy = random(height)
}

function draw() {
    background(random(360), random(30, 60), random(50, 100));

    let p = floor(random(4, 20))

    noFill()
    let startCol = color(random(360), random(50, 70), random(50, 100), 5)
    let endCol = color(random(360), random(50, 70), random(50, 100), 5)
    strokeWeight(1.5)
    for (let i = 0; i < blobs; i++) {
        const r = i * 1.5
        blob(cx, cy, r, i, startCol, endCol, points=p)
    }
    noloop()
}

function saveImg() {
    saveCanvas("zach-"+Date.now(), "png")
}

function redo() {
    cx = random(width)
    cy = random(height)
    noiseSeed(random(100))
    redraw()
}

function keyPressed(){
    if (key == " "){
        redo()
    }

    if (key == "s"){
        saveImg()
    }
}
