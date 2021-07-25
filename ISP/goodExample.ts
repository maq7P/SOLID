interface Shape {
  render();
}
interface CircleShape {
  renderCircle();
}
interface SquareShape {
  renderSquare();
}
interface RectangleShape {
  renderRectangle();
}

class Circlee implements CircleShape {
  renderCircle() {}
}

class Square implements SquareShape {
  renderSquare() {}
}

class Rectangle implements RectangleShape {
  renderRectangle() {}
}

class CustomShape implements Shape {
  render() {}
}
