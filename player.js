class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = 4;
    this.radius = 5;
    this.speed = 1;
    this.width = 15;
    this.height = 15;
  }

  draw() {
    fill(0);
    ellipse(mouseX, mouseY, this.width, this.height);
  }
}
