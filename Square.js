var Rectangle = require('./Rectangle')

function Square (side) {
  Rectangle.call(this, side, side)
}

Square.prototype = new Rectangle()
module.exports = Square
