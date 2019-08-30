class Game {
  constructor() {
    this.player = new Player(200, 200);
    this.minus = [];
    this.plus = [];
    this.faster = [];
    this.slower = [];
    //this.goal = new Goal();
    // this.background = new Background();
  }

  setup() {
    // this.background.setup();
    for (let i = 0; i <= 5; i++) {
      this.minus.push(new Minus(Math.random() * WIDTH, Math.random() * HEIGHT));
    }

    for (let i = 0; i <= 5; i++) {
      this.plus.push(new Plus(Math.random() * WIDTH, Math.random() * HEIGHT));
    }
    for (let i = 0; i <= 5; i++) {
      this.faster.push(
        new Faster(Math.random() * WIDTH, Math.random() * HEIGHT)
      );
    }
    for (let i = 0; i <= 5; i++) {
      this.slower.push(
        new Slower(Math.random() * WIDTH, Math.random() * HEIGHT)
      );
    }
    // this.goal.setup();
  }

  draw() {
    // this.background.draw();

    this.player.draw();
    this.player.wallCollision();
    goal.draw();
    this.minus.forEach((minus, i) => {
      minus.draw();
      if (this.collisionCheck(minus, goal)) {
        // this.minus.splice(i, 1);
        // this.minus.push(
        //   new Minus(Math.random() * WIDTH, Math.random() * HEIGHT)
        // );
        minus.randX *= -1;
        minus.randY *= -1;
      }
      if (this.collisionCheck(minus, this.player)) {
        if (this.player.width <= 20) {
          this.player.width = 20;
          this.player.height = 20;
        } else {
          this.minus.splice(i, 1);
          this.player.height -= 6.5;
          this.player.width -= 6.5;
          this.minus.push(
            new Minus(Math.random() * WIDTH, Math.random() * HEIGHT)
          );
        }
      }
    });
    //let randomColor = color(random(255), random(255), random(255));

    this.plus.forEach((plus, i) => {
      plus.draw();
      if (this.collisionCheck(plus, goal)) {
        plus.randX *= -1;
        plus.randY *= -1;
      }
      if (this.collisionCheck(plus, this.player)) {
        if (this.player.width >= 500) {
          this.player.width = 500;
          this.player.height = 500;
        } else {
          this.plus.splice(i, 1);
          this.player.height += 10;
          this.player.width += 10;
          this.plus.push(
            new Plus(Math.random() * WIDTH, Math.random() * HEIGHT)
          );
        }
      }
    });
    this.faster.forEach((faster, i) => {
      faster.draw();
      if (this.collisionCheck(faster, goal)) {
        faster.randX *= -1;
        faster.randY *= -1;
      }
      if (this.collisionCheck(faster, this.player)) {
        this.faster.splice(i, 1);
        this.player.speed += 2;
        this.faster.push(
          new Faster(Math.random() * WIDTH, Math.random() * HEIGHT)
        );
      }
    });
    this.slower.forEach((slower, i) => {
      slower.draw();
      if (this.collisionCheck(slower, goal)) {
        slower.randX *= -1;
        slower.randY *= -1;
      }
      if (this.player.speed <= 1.5) {
        this.player.speed == 1;
        return;
      } else if (this.collisionCheck(slower, this.player)) {
        this.slower.splice(i, 1);
        this.player.speed -= 1.5;
        this.slower.push(
          new Slower(Math.random() * WIDTH, Math.random() * HEIGHT)
        );
      }
    });
  }
  collisionCheck(obstacle, player) {
    if (
      player.x + player.width / 2 <= obstacle.x || // player's right edge is left of the left edge of the obstacle
      obstacle.x + obstacle.width <= player.x - player.width / 2 // obstacle's right edge is left of the left edge of the player
    ) {
      return false;
    }
    if (
      player.y + player.height / 2 <= obstacle.y || // player's bottom edge is top of the obstacle's top edge
      obstacle.y + obstacle.height <= player.y - player.height / 2 // obstacle's bottom edge is top of the player's top edge
    ) {
      return false;
    }

    return true;
  }

  // collisionCheck(obstacle, goal) {
  //   if (
  //     goal.x + goal.width / 2 <= obstacle.x || // player's right edge is left of the left edge of the obstacle
  //     obstacle.x + obstacle.width <= goal.x - goal.width / 2 // obstacle's right edge is left of the left edge of the player
  //   ) {
  //*** */     return false;
  //   }
  //   if (
  //     goal.y + goal.height / 2 <= obstacle.y || // player's bottom edge is top of the obstacle's top edge
  //     obstacle.y + obstacle.height <= goal.y - goal.height / 2 // obstacle's bottom edge is top of the player's top edge
  //   ) {
  //     return false;
  //   }

  //   return true;
  // }
}
