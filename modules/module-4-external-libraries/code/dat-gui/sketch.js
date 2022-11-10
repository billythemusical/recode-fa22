/* 

Dat-GUI v0.6.5 - https://github.com/dataarts/dat.gui/releases?page=2#:~:text=Compare-,0.6.5,Add%20Browserify%20support.%20%23137,-Assets
    API Docs - https://github.com/dataarts/dat.gui/blob/master/API.md
*/


const ball = {
    x: 100,
    y: 100,
    xSpeed: 1,
    ySpeed: 2,
    rgb: [ 200, 20, 100]
}

const gui = new dat.gui.GUI()

gui.addFolder('Movement')
gui.add(ball, 'xSpeed', 0.0, 20.0, 1.0)
    .onChange(value => ball.xSpeed = value)
gui.add(ball, 'ySpeed', 0.0, 20.0, 1.0)
    .onChange(value => ball.ySpeed = value)

gui.addFolder('Color')
gui.addColor(ball, 'rgb', 0, 255, 1)
    .onChange(value => ball.rgb = value)


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    moveBallAndCheckEdges()

    fill(ball.rgb)
    
    ball.x += ball.xSpeed
    ball.y += ball.ySpeed

    ellipse(ball.x, ball.y, 20)
}

function moveBallAndCheckEdges() {
    if (ball.x < 0 || ball.x > width) ball.xSpeed *= -1
    if (ball.y < 0 || ball.y > height) ball.ySpeed *= -1
}