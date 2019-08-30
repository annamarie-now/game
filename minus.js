class Minus {
  constructor(randomX, randomY) {
    this.y = randomY;
    this.x = randomX;
    this.width = 15;
    this.height = 5;
    this.randX = random(2.5, -2.5);
    this.randY = random(2.5, -2.5);
  }
  draw() {
    fill("#313131");
    rect(this.x, this.y, 15, 5);
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
