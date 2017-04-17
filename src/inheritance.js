function Rectangle (w, h) {
  this.width = w
  this.height = h
}

Rectangle.prototype.area = function () {
  return this.height * this.width
}

Rectangle.prototype.description = function () {
  return 'Rectangle of width ' + this.width + ', height ' + this.height + ' and area ' + this.area() + '.'
}

function Square (side) {
  Rectangle.call(this, side, side)
}

Square.prototype = new Rectangle()

Square.prototype.description = function () {
  return 'Square of side ' + this.height + ' and area ' + this.area() + '.'
}

module.exports.Rectangle = Rectangle
module.exports.Square = Square
