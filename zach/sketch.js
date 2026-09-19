function blob(x, y, r) {
    beginShape()
    for (let a = 0; a < 360; a += 360 / 20) {
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

let bgpicker, fgpicker
let saveBtn
let redoBtn

function setup() {
    createCanvas(400 * scl, 500 * scl);
    angleMode(DEGREES)

    bgpicker = createColorPicker()
    bgpicker.changed(redraw)
    fgpicker = createColorPicker("lightgreen")
    fgpicker.changed(redraw)

    saveBtn = createButton("save").mousePressed(saveImg)
    redoBtn = createButton("redo").mousePressed(redo)
}

function draw() {
    background(bgpicker.color());

    noiseSeed(random(100))

    let cx = random(width)
    let cy = random(height)

    noFill()
    let col = color(fgpicker.value() + "77")
    stroke(col)
    strokeWeight(2)
    for (let i = 0; i < 500; i++) {
        const r = i * 1.5
        blob(cx, cy, r)
    }
    noloop()
}

function saveImg() {
    saveCanvas("zach-"+Date.now(), "png")
}

function redo() {
    redraw()
}
