
function Rectangle (w, h) {
  this.width = w
  this.height = h
}

Rectangle.prototype.area = function () {
  return this.width * this.height
}

Rectangle.prototype.description = function () {
  console.log('Rectangle of width ' + this.width + ', height ' + this.height + ' and area ' + this.area() + '.')
}

function Square (n) {
  Rectangle.call(this, n, n)
}

Square.prototype = new Rectangle()

Square.prototype.description = function () {
  console.log('Square of side ' + this.width + ' and area ' + this.area() + '.')
}

module.exports = Rectangle
module.exports = Square
