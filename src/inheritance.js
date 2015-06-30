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

Rectangle.prototype.description = function () {
  var des = ('Rectangle of width ' + this.width + ', height ' + this.height + ' and area ' + this.area() + '.')
  return des
}

// SQUARE /////////////////////////////////////////////////////////////////////
// Square es un tipus concret de Rectangle //

// CONSTRUCTOR //////////////////
function Square (n) {
  Rectangle.call(this, n, n)
}

// HERENCIA //////////////////
Square.prototype = new Rectangle()

Square.prototype.description = function () {
  var des = ('Square of side ' + this.width + ' and area ' + this.area() + '.')
  return des
}

// MODULE /////////////////////////////////////////////////////////////////////
var Inheritance = {}
Inheritance.Rectangle = Rectangle
Inheritance.Square = Square

module.exports = Inheritance
