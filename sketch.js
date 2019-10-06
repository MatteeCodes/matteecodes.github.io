let circle;
let cImg;
let cube
function preload() {
  cImg = loadImage('dorito.png');
}

function setup() {
  console.log("program started");
  createCanvas (1920, 980);
  circle = new Circle();
  cube = new Cube();
}

function keyPressed() {
  if (key == ' ') {
    circle.jump();
  } else if (keyCode == RIGHT_ARROW) {
		circle.moveside();
  }
}
}
function draw () {
  background(47, 163, 34);
  circle.show();
  circle.move();
  cube.locate();
  cube.show();
  cube.jump();
  cube.move();
  cube.locatex();
}
