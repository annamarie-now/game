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
    this.innerCicleX = 0;
    this.innerCicleY = 0;
    this.alive = true;
  }

  draw() {
    if (this.alive !== true) return;
    push();
    // ellipse(mouseX, mouseY, this.width, this.height);
    translate(this.x, this.y);
    rotate(this.angle);

    fill("blue");
    ellipse(0, 0, this.width, this.height);
    if (this.width <= 25) {
      fill("red");
      this.width = 25;
      this.height = 25;
    } else if (this.width > 200) {
      fill((frameCount * 5) % 255);
    } else fill("#256EFF");

    if (this.width > 300) {
      console.log("lost");
      document.querySelector(".youLost").style.display = "block";
    }

    ellipse(
      this.innerCicleX,
      this.innerCicleY,
      this.width - 15,
      this.height - 15
    );
    pop();

    this.move();
    this.wallCollision();
    this.goalCollision();
  }
  move() {
    // if (keyIsDown(40)) {
    //   this.angle = 0;
    // }

    if (!keyIsDown(38) && !keyIsDown(40)) {
      this.innerCicleY = 0;
    }

    if (!keyIsDown(37) && !keyIsDown(39)) {
      this.innerCicleX = 0;
    }

    if (keyIsDown(37)) {
      this.x -= this.speed;
      this.innerCicleX = -7;
    }

    if (keyIsDown(38)) {
      /*   // this.angle = 3;
      this.x -= sin(this.angle) * this.speed;
      this.y += cos(this.angle) * this.speed; */
      this.y -= this.speed;
      this.innerCicleY = -7;
    }

    if (keyIsDown(40)) {
      this.y += this.speed;
      this.innerCicleY = +7;
    }

    if (keyIsDown(39)) {
      this.x += this.speed;
      this.innerCicleX = +7;
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
    this.x = goal.x;
    this.y = goal.y;
    this.alive = false;
    // this.width = 0;
    // this.height = 0;
    document.querySelector(".youWin").style.display = "block";

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
