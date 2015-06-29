function Rectangle (w, h) {
  this.width = w
  this.height = h
}
Rectangle.prototype.area = function () {
  return this.width * this.height
}

function Square (side) {
  Rectangle.call(this, side, side)
}

Square.prototype.area = new Rectangle()

var Inheritance = {}
Inheritance.Square = Square
Inheritance.Rectangle = Rectangle
module.exports = Inheritance
