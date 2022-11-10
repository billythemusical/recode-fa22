let ball = { 
    x: 0, 
    y: 200,
    col: null,
};

function setup() {
    createCanvas(800, 400);
    createButton('gsap.fromTo').mousePressed(moveBall)
    createButton('gsap.to with repeat').mousePressed(moveBallChangeColor)

    ball.col = color(180, 100, 212) // we have to wait for p5 to load
}

function draw() {
    background(220);
    fill(ball.col)
    ellipse(ball.x, ball.y, 100)
}

function moveBall() {
    gsap.fromTo(
        ball, // object to change
        { x: 0 }, // from this...
        { x: width }, // to this...
    );
}

function moveBallChangeColor() {
    gsap.to(
        ball, // object to change
        { // go to these values...
            x: width * 0.5,  
            col: color(100, 200, 100),
            duration: 3, // over 3 seconds
            repeat: 3, // after the first time, how many more?
            yoyo: true, // this will alternate back and forth on each repeat, like a yoyo
        }
    );
}