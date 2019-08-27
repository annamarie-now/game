class Minus {
  constructor(randomX, randomY) {
    this.y = randomY;
    this.x = randomX;
    this.width = 15;
    this.height = 5;
  }
  draw() {
    fill(255);
    rect(this.x, this.y, 15, 5);
    noStroke();
  }
}
