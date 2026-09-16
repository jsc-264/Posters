let chi;

async function setup() {
    createCanvas(500, 500);
    chi = await loadImage("./assets/chicago.jpg");
    chi.resize(50, 50);
    noSmooth()
}

function draw() {
    let newChi = sortPixels(chi)
    image(newChi, 0, 0, width, height);
    noLoop()
}

function sortPixels(img){
    let newImg = createImage(img.width, img.height)
    newImg.loadPixels()
    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++) {
            newImg.set(x, y, img.get(x, y))
        }
    }
    newImg.updatePixels()
    return newImg
}
