// https://p5js.org/reference/#/p5/filter

let cam;
let water;

function preload() {
    water = createVideo('../videos/water-trim.mp4')
    water.volume(0.0)
    water.loop()
    water.hide()
}

function setup() {
    createCanvas(400, 400);
    blendMode(LIGHTEST)

    cam = createCapture(VIDEO)
    cam.hide()
    
}

function draw() {
    // background(0);
    filter(INVERT)
    image(water, 0, 0, width, height)
    // image(cam, 0, 0, width, height)
}