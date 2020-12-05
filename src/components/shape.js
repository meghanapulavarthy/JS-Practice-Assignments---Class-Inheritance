// declare class

// export class using module.exports


class Shape {

  constructor() {
      this.color = "blue";
  }
  drawShape() {
      console.log("Drawing");
  }
  calculateArea() {
      console.log("area");
      return 0;
  }
}
module.exports = Shape;