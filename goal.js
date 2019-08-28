class Goal {
  constructor() {
    this.x = WIDTH * 0.5;
    this.y = HEIGHT * 0.5;
    this.width = 40;
    this.height = 40;
  }
  draw() {
    fill("red");
    ellipse(this.x, this.y, this.width, this.height);
  }
}
