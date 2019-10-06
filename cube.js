class Cube {
  constructor() {
    this.r = 70;
    this.x = (1000);
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2;
  }
  jump() {
    this.vy = -10;
  }
  move() {
    this.y += this.vy;
    this.x += -;
    this.vy += this.gravity;
    this.y = constrain(this.y , 0, height - this.r);
    this.x = constrain(this.x , 0, 1920);
  }
  show() {
    rect(this.x, this.y, this.r, this.r);

   }
   locate() {
     if (this.y == 0) {
       this.y = height - this.r
     }
   }
   locatex() {
     if (this.x == 0) {
       this.x = 1000
     }
   }
}
