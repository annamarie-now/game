class Goal {
  constructor() {
    this.x = WIDTH * 0.5;
    this.y = HEIGHT * 0.5;
    this.width = 25;
    this.height = 25;
  }
  draw() {
    fill("red");
    ellipse(this.x, this.y, this.width, this.height);
  }
}
