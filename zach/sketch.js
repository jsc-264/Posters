function blob(x, y, r) {
    beginShape()
    for (let a = 0; a < 360; a+=18) {
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

function setup() {
    createCanvas(400*scl, 500*scl);
    angleMode(DEGREES)

    bgpicker = createColorPicker()
    fgpicker = createColorPicker("red")

    saveBtn = createButton("save")
    saveBtn.mousePressed(saveImg);
}

function draw(){
    background(bgpicker.color());

    noFill()
    let col = color(fgpicker.value() + "0f")
    stroke(col)
    strokeWeight(5)
    for (let i = 0; i < 500; i++) {
        const r = i * 1.5
        blob(width / 3, height / 4, r)
    }
    noLoop()
}

function saveImg(){
    saveCanvas(`zach-${Date.now()}`, "png")
}

function keyPressed(){
    if (key == " "){
        noiseSeed(random(100000))
        redraw()
    }
}
