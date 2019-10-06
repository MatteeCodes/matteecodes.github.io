let circle;
let cImg;
let cube
var = d
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
  }
if (keyCode === RIGHT_ARROW) {
  circle.movesider();
  }
if (keyCode ===LEFT_ARROW) {
  circle.movesidel();
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
 var d = dist(cube.x,cube.y,circle.x,circle.y);



 if (d < circle.r + cube.r){
   cube.changeColor();
 }
}
