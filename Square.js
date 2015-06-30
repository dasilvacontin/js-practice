var Rectangle = require('./Rectangle')

function Square (side) {
  this.width = this.height = side
  // manera molona
  // Rectangle.call(this, side, side)
}

Square.prototype = new Rectangle()

Square.prototype.description = function () {
  return 'Square of side ' + this.height + ' and area ' + this.area() + '.'
}

module.exports = Square
