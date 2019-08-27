class Plus {
  constructor(randomX, randomY) {
    this.y = randomY;
    this.x = randomX;
    this.width = 15;
    this.height = 15;
  }
  draw() {
    fill(255);
    rect(this.x, this.y, 15, 5);
    rect(this.x + 5, this.y - 5, 5, 15);
    fill(255);
    noStroke();
  }
}
