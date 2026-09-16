const DIM = 10
let chi

async function setup() {
    chi = await loadImage("./assets/chicago.jpg")
    createCanvas(500, 500);
}

function draw() {
    background(220);

    image(chi, 0, 0, width, height)
}
