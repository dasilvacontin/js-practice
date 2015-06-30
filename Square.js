var Rectangle = require('./Rectangle')

function Square (side) {
  Rectangle.call(this, side, side)
  this.type = 'Square'
  this.description = function () {
    return 'Square of side ' + this.width + ' and area ' + this.area() + '.'
  }
}

Square.prototype = new Rectangle()
module.exports = Square
