// p5.glitch-image
// cc teddavis.org 2020
// link to lib - https://cdn.jsdelivr.net/npm/p5.glitch@latest/p5.glitch.js


let glitch;

// Our object
const parameters = {
    random: 1,
    swapA: 100,
    swapB: 104
}

// Create the GUI
const gui = new dat.gui.GUI()
// Create a folder grouping and pass in a name
gui.addFolder('Glitch Controls')
// takes object, key name (also the label), min, max, and increment
gui.add(parameters, 'random', 0, 20, 1)

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    imageMode(CENTER);

    glitch = new Glitch();
    loadImage('fish.png', function (im) {
        glitch.loadImage(im);
    });
}

function draw() {
    glitch.resetBytes();

    glitch.replaceBytes(100, 104); // swap all decimal byte 100 for 104
    glitch.randomBytes(parameters.random); // add one random byte for movement

    glitch.buildImage();
    image(glitch.image, width / 2, height / 2)
}