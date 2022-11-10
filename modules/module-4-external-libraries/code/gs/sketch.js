console.log(gsap)
console.log(p5)

let ball = { 
    x: 0, 
    y: 200
};
console.log("ball.x is", ball.x)

function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(220);
    ellipse(ball.x, ball.y, 100)
}

function mousePressed() {
    gsap.fromTo(
        ball, // object to change
        { x: 200, y: 0, }, // from
        { x: width, y: height } // to
    );

}