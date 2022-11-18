// https://p5js.org/reference/#/p5/blendMode

let cam;
let water;

function preload() {
  water = createVideo('../../videos/water-trim.mp4')
  water.loop()
  water.hide()
}

function setup() {
  createCanvas(400, 400);
  pixelDensity(1)
}

function draw() {
  background(127);
  image(water, 0, 0, width, height)
  // filter(GRAY)

  loadPixels()

  for(var y = 0; y < height; y++) {
    for(var x = 0; x < width; x++){

      let index = (x + y * width) * 4;

      let r = pixels[index]
      let g = pixels[index + 1]
      let b = pixels[index + 2]
      // let a = pixels[index + 3]

      let avg;


      if(x < width / 2 ) {
         avg = (r + g + b)/3
      } else {
        avg = r*0.299 + g*0.587 + b*0.0114;
      }

      pixels[index] = avg
      pixels[index + 1] = avg
      pixels[index + 2] = avg


    }
  }

  updatePixels()

  drawLabels()

}

function drawLabels() {
  fill(255, 185)
  noStroke()
  rect(45, 85, 70, 20)
  rect(width - 105, 85, 65, 20)
  fill(0, 255)
  text('AVERAGE', 50, 100)
  text('LUMA', width / 2 + 110, 100)
}
