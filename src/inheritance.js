
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
  this.side = side
  this.width = side
  this.height = side
}

Square.prototype = new Rectangle()

Square.prototype.description = function () {
  return 'Square of side ' + this.side + ' and area ' + this.area() + '.'
}

module.exports = {
	Rectangle: Rectangle,
	Square: Square
}
