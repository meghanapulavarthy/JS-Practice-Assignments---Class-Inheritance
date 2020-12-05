// import using require

// declare class

// export class using module.exports

const Shape = require("./shape");

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  calculateArea() {
    return 3.14 * 5 * 5;
  }
}
module.exports = Circle;
