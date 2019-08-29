const game = new Game();
let goal = new Goal();

function setup() {
  const cnv = createCanvas(WIDTH, HEIGHT);
  cnv.parent("game");
  //.center();
  game.setup();
  angleMode(DEGREES);
}

function draw() {
  clear();
  background(100);
  game.draw();
  push();
  // translate(width * 0.5, height * 0.5);
  // rotate(frameCount / -100.0);

  // star(0, 0, 3.5, 8.5, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = (TWO_PI / npoints / PI) * 180;
  let halfAngle = (angle / 2.0 / PI) * 180;
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

/* function keyPressed() {
  game.player.move();
} */

// window.addEventListener(
//   "keydown",
//   function(e) {
//     // space and arrow keys
//     if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
//       e.preventDefault();
//     }
//   },
//   false
// );
