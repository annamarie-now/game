class Slower {
  constructor(randomX, randomY) {
    this.y = randomY;
    this.x = randomX;
    this.width = 15;
    this.height = 15;
    this.randX = random(2, -2);
    this.randY = random(2, -2);
  }
  draw() {
    fill("#959595");
    square(this.x, this.y, 15);
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
  goalCollision() {
    if (
      obstacle.x > goal.x + goal.width * 0.5 &&
      obstacle.y > goal.y - goal.height * 0.5
    ) {
      this.randY *= -1;
    }

    // if()

    //     if (obstacle.x<goal.x + goal.width*0.5 || obstacle.x> goal.x-goal.width*0.5 &&

    //         ){this.randX*=1;}

    //         this.x < this.goal.x -) {
    //         this.randX *= -1;
    //       }
    //       if (this.x > WIDTH) {
    //         this.randX += -1;
    //       }
    //       if (this.y < 0) {
    //         this.randY *= -1;
    //       }
    //       if (this.y > HEIGHT) {
    //         this.randY *= -1;
  }
}
