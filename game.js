class Game {
  constructor() {
    this.player = new Player();
    this.minus = [];
    this.plus = [];
  }

  setup() {
    for (let i = 0; i <= 20; i++) {
      this.minus.push(new Minus(Math.random() * WIDTH, Math.random() * HEIGHT));
    }

    for (let i = 0; i <= 20; i++) {
      this.plus.push(new Plus(Math.random() * WIDTH, Math.random() * HEIGHT));
    }
  }

  draw() {
    this.player.draw();
    this.minus.forEach(minus => {
      minus.draw();
      if (this.collisionCheck(minus, this.player)) {
        this.player.height-- && this.player.width--;
      }
    });
    this.plus.forEach(plus => {
      plus.draw();
      if (this.collisionCheck(plus, this.player)) {
        this.player.height++ && this.player.width++;
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
