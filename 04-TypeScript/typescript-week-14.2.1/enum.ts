// enums

enum Direction {
  Up,
  Down,
  Right,
  Left,
}

function doSomething(keyPressed: Direction) {
  if (keyPressed == Direction.Up) {
    console.log("Up");
  } else if (keyPressed == Direction.Down) {
    console.log("Down");
  }
}

doSomething(Direction.Up);
doSomething(Direction.Down);
