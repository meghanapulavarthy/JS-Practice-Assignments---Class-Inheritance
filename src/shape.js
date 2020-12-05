
class Shape {

  constructor() {
      this.color = "red";
  }
  drawShape() {
      console.log("Drawing Shape");
  }
  calculateArea() {
      console.log("Dont know area of unknown shape");
      return 0;
  }
}
module.exports = Shape;