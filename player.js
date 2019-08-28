class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // this.velocity = -20;
    this.radius = 5;
    this.speed = 0.5;
    this.width = 50;
    this.height = 50;
    this.angle = 0;
  }

  draw() {
    push();
    // ellipse(mouseX, mouseY, this.width, this.height);
    translate(this.x, this.y);
    rotate(this.angle);

    fill("black");
    ellipse(0, 0, this.width, this.height);
    if (this.width <= 40) {
      fill("red");
    } else if (this.width > 70) {
      fill((frameCount * 5) % 255);
    } else fill("white");

    ellipse(0, 0 + 5, this.width - 10, this.height - 10);
    pop();

    this.move();
    this.wallCollision();
    this.goalCollision();
  }
  move() {
    // if (keyIsDown(40)) {
    //   this.angle = 0;
    // }

    if (keyIsDown(37)) {
      this.angle += 3;
    }

    if (keyIsDown(38)) {
      // this.angle = 3;
      this.x -= sin(this.angle) * this.speed;
      this.y += cos(this.angle) * this.speed;
    }

    if (keyIsDown(39)) {
      this.angle -= 3;
    }
  }
  // if (keyIsDown(32)) {
  //   this.x += sin(this.angle) * this.speed;
  //   this.y -= cos(this.angle) * this.speed;
  // }

  wallCollision() {
    if (this.x - this.width / 2 < 0) {
      this.x = 0 + this.width / 2;
    }
    if (this.x + this.width / 2 > WIDTH) {
      this.x = WIDTH - this.width / 2;
    }
    if (this.y - this.height / 2 < 0) {
      this.y = 0 + this.height / 2;
    }
    if (this.y + this.height / 2 > HEIGHT) {
      this.y = HEIGHT - this.height / 2;
    }
  }

  goalCollision() {
    if (
      this.x + this.width / 2 <= goal.x || // player's right edge is left of the left edge of the obstacle
      goal.x + goal.width <= this.x - this.width / 2
      // this.width > goal.width // obstacle's right edge is left of the left edge of the player
    ) {
      return false;
    }
    if (
      this.y + this.height / 2 <= goal.y || // player's bottom edge is top of the obstacle's top edge
      goal.y + goal.height <= this.y - this.height / 2
      // this.height > goal.height // obstacle's bottom edge is top of the player's top edge
    ) {
      return false;
    }
    if (this.width > goal.width || this.height > goal.height) return false;
    document.querySelector(".start").style.display = "block";

    return true;
    // return: Player disappears, alert: You won!
  }
  // if (this.x === goal.x && this.width === goal.width)
  //     this.x = 0 + this.width / 2;
  //   }
  //   if (this.x + this.width / 2 > WIDTH) {
  //     this.x = WIDTH - this.width / 2;
  //   }
  //   if (this.y - this.height / 2 < 0) {
  //     this.y = 0 + this.height / 2;
  //   }
  //   if (this.y + this.height / 2 > HEIGHT) {
  //     this.y = HEIGHT - this.height / 2;
  //   }
  // }
}
