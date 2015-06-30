
function Rectangle (width, height) {
  this.width = width
  this.height = height
}

Rectangle.prototype.area = function () {
  return this.width * this.height
}

function Square (side) {
  this.side = side
  this.width = side
  this.height = side
}

Square.prototype = new Rectangle()

module.exports = {
	Rectangle: Rectangle,
	Square: Square
}
