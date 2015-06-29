function Rectangle (width, height) {
  this.width = width
  this.height = height
}

Rectangle.prototype.area = function () {
  return this.width * this.height
}

Rectangle.prototype.description = function () {
  return 'Rectangle of width ' + this.width + ', height ' + this.height + ' and area ' + this.area() + '.'
}

function Square (side) {
  Rectangle.call(this, side, side)
}

Square.prototype = new Rectangle()

Square.prototype.description = function () {
  return 'Square of side ' + this.width + ' and area ' + this.area() + '.'
}

var Inheritance = {}
Inheritance.Rectangle = Rectangle
Inheritance.Square = Square

module.exports = Inheritance
