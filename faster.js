class Faster {
  constructor(randomX, randomY) {
    this.y = randomY;
    this.x = randomX;
    this.width = 15;
    this.height = 15;
    this.randX = random(2, -2);
    this.randY = random(2, -2);
  }
  draw() {
    fill("#5D5D5D");
    triangle(this.x, this.y, this.x + 10, this.y + 15, this.x + 20, this.y);
    //(10, 30, 19, 15, 30, 30);

    noStroke();
    this.move();
    this.wallCollision();
  }
  move = () => {
    /*   if (frameCount % 120 === 0) {
        this.randomX = random(0.4, -0.4);
        this.randomY = random(0.4, -0.4);
      } */

    this.x += this.randX;
    this.y += this.randY;
  };

  wallCollision() {
    if (this.x < 0) {
      this.randX *= -1;
    }
    if (this.x > WIDTH - this.width) {
      this.randX += -1;
    }
    if (this.y < 0) {
      this.randY *= -1;
    }
    if (this.y > HEIGHT - this.height) {
      this.randY *= -1;
    }
  }
}
