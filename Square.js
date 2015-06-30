var Rectangle = require('./Rectangle')

function Square (side) {
  Rectangle.call(this, side, side)
  this.type = 'Square'
}

Square.prototype = new Rectangle()

Square.prototype.description = function () {
  return 'Square of side ' + this.width + ' and area ' + this.area() + '.'
}

module.exports = Square
