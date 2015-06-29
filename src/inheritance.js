// RECTANGLE //////////////////////////////////////////////////////////////////
// Rectangle es la forma generica //

// CONSTRUCTOR //////////////////
function Rectangle (w, h) {
  this.width = w
  this.height = h
}

// METODES //////////////////
Rectangle.prototype.area = function () {
  var ar = this.width * this.height
  return ar
}

// SQUARE /////////////////////////////////////////////////////////////////////
// Square es un tipus concret de Rectangle //

// CONSTRUCTOR //////////////////
function Square (n) {
  this.width = n
  this.height = n
}

// HERENCIA //////////////////
Square.prototype = new Rectangle()

// MODULE /////////////////////////////////////////////////////////////////////
var Inheritance = {}
Inheritance.Rectangle = Rectangle
Inheritance.Square = Square

module.exports = Inheritance
