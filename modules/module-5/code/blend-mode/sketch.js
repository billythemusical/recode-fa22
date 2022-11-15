// https://p5js.org/reference/#/p5/blendMode

let cam;
let water;

function preload() {
    water = createVideo('water-trim.mp4')
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
    background(0);
    image(water, 0, 0, width, height)
    image(cam, 0, 0, width, height)
}