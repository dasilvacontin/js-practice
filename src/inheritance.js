function Rectangle (w, h) {
  this.width = w
  this.height = h
}

Rectangle.prototype.area = function () {
  return this.width * this.height
}

Rectangle.prototype.description = function () {
  return 'Rectangle of width ' + this.width + ', height ' + this.height + ' and area ' + this.area() + '.'
}

function Square (wh) {
  Rectangle.call(this, wh, wh)
}

Square.prototype = new Rectangle()

Square.prototype.description = function () {
  return 'Square of side ' + this.width + ' and area ' + this.area() + '.'
}
/*
module.exports = {
	Rectangle: Rectangle,
	Square: Square
}
*/
module.exports.Rectangle = Rectangle
module.exports.Square = Square
/*
module.exports['Rectangle'] = Rectangle
*/

/*
exports.Rectangle = Rectangle
*/
