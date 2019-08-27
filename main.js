const game = new Game();
// const WIDTH = window.innerWidth;
// const HEIGHT = window.innerHeight;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup();
}

function draw() {
  clear();
  background(100);
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 3.5, 8.5, 5);
  pop();
  game.draw();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  fill("black");
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
