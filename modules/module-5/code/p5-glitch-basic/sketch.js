// p5.glitch-image
// cc teddavis.org 2020
// link to lib - https://cdn.jsdelivr.net/npm/p5.glitch@latest/p5.glitch.js


let glitch;
// p5.disableFriendlyErrors = true;

function preload() {
    glitch = new Glitch();
    loadImage('new-image.jpg', (img) => {
        glitch.loadImage(img)
    })
}

let parameters = {
    randomBytes: 1,
    byteA: 100,
    byteB: 104,
}

const gui = new dat.gui.GUI()
gui.addFolder('Glitch Parameters')
// gui.add(object, key name, min, max, increment)
gui.add(parameters, 'randomBytes', 0, 100, 1)
gui.add(parameters, 'byteA', 0, 255, 1)
gui.add(parameters, 'byteB', 0, 255, 1)


function setup() {
    createCanvas(windowWidth, windowHeight);
    // pixelDensity(1)
    glitch.pixelate(1);
    background(0);
    imageMode(CENTER);

}

function draw() {
    glitch.resetBytes()

    glitch.replaceBytes(parameters.byteA, parameters.byteB)

    if(frameCount % 60 < 10) {
        glitch.randomBytes(parameters.randomBytes)
    }

    glitch.buildImage()

    image(glitch.image, width / 2, height / 2, width, height)
    
}