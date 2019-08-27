class Game {
  constructor() {
    this.player = new Player();
    this.minus = [];
    this.plus = [];
    this.background = new Background();
  }

  setup() {
    this.background.setup();
    for (let i = 0; i <= 15; i++) {
      this.minus.push(new Minus(Math.random() * WIDTH, Math.random() * HEIGHT));
    }

    for (let i = 0; i <= 35; i++) {
      this.plus.push(new Plus(Math.random() * WIDTH, Math.random() * HEIGHT));
    }
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.minus.forEach((minus, i) => {
      minus.draw();
      if (this.collisionCheck(minus, this.player)) {
        this.minus.splice(i, 1);
        this.player.height -= 7;
        this.player.width -= 7;
        this.minus.push(
          new Minus(Math.random() * WIDTH, Math.random() * HEIGHT)
        );
      }
    });
    this.plus.forEach((plus, i) => {
      plus.draw();
      if (this.collisionCheck(plus, this.player)) {
        this.plus.splice(i, 1);
        this.player.height += 10;
        this.player.width += 10;
        this.plus.push(new Plus(Math.random() * WIDTH, Math.random() * HEIGHT));
      }
    });
  }
  collisionCheck(obstacle, player) {
    if (
      mouseX + player.width <= obstacle.x || // player's right edge is left of the left edge of the obstacle
      obstacle.x + obstacle.width <= mouseX // obstacle's right edge is left of the left edge of the player
    ) {
      return false;
    }
    if (
      mouseY + player.height <= obstacle.y || // player's bottom edge is top of the obstacle's top edge
      obstacle.y + obstacle.height <= mouseY // obstacle's bottom edge is top of the player's top edge
    ) {
      return false;
    }

    return true;
  }
}
