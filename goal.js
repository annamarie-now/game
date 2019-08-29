class Goal {
  constructor() {
    this.x = WIDTH * 0.5;
    this.y = HEIGHT * 0.5;
    this.width = 30;
    this.height = 30;
  }
  draw() {
    fill("red");
    ellipse(this.x, this.y, this.width, this.height);
  }
}
