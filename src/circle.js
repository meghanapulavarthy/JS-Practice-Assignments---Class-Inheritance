const Shape = require("./shape");

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  calculateArea() {
    console.log("Area of circle with color: " + this.color);
    return 3.14 * 5 * 5;
  }
}
module.exports = Circle;