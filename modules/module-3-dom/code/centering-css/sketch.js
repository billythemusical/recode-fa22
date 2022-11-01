let x = 100;
let y = 100;
let w = 150;
let xMove = 10;
let yMove = 7;

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(255, 0, 200, 10);
    moveBall()
    ellipse(x, y, w)
}

function moveBall() {
    if(x > width - w/2) xMove *= -1
    if(x < 0 + w/2) xMove *= -1
    if(y > height - w/2) yMove *= -1
    if(y < 0 + w/2) yMove *= -1
    x += xMove
    y += yMove
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

const colorButton = document.getElementById('colorButton')
colorButton.onclick = () => {
    console.log('clicked')
    fill(random(255), random(255), random(255)); 
}