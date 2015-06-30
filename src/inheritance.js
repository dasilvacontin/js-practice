function Rectangle (w, h) {
  this.width = w
  this.height = h
}
Rectangle.prototype.area = function () {
  return this.width * this.height
}

Rectangle.prototype.description = function() {
  return 'Rectangle of width ' + this.weidth + ', height ' + this.height + ' and area ' + this.area() + '.'
}

function Square (side) {
  Rectangle.call(this, side, side)
}

Square.prototype.area = new Rectangle()

Square.prototype.description = function() {
  return 'Square of side ' + this.width + ' and area ' + this.area() + '.'
}

var Inheritance = {}
Inheritance.Square = Square
Inheritance.Rectangle = Rectangle
module.exports = Inheritance
