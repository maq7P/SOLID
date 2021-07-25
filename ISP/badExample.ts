// interface Shape нарушает принцип ISP,
// так как для создания отедльных классов
// Circle, Square, Rectangle нам требуется
// Прописывать ненужные методы

interface Shape {
  renderCircle();
  renderSquare();
  renderRectangle();
}

class Circle implements Shape {
    renderCircle(){}
    renderSquare(){}
    renderRectangle(){}
}

class Square implements Shape {
    renderCircle(){}
    renderSquare(){}
    renderRectangle(){}
}

class Rectangle implements Shape {
    renderCircle(){}
    renderSquare(){}
    renderRectangle(){}
}