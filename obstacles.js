const randomPosition = [Math.random() * WIDTH, Math.random() * HEIGHT];

//  shapes.push(.minus);

// const listOfShapes = [];
// for (let i = 0; i < n; i++) {
//   listOfShapes.push(new Minus(this.x, this.y));
// }

function draw() {
  clear();
  listOfMinus.forEach(x => {
    x.create();
    x.collisionCheck(listOfMinus);
  });
}
