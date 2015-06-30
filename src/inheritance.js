
function Rectangle (w, h) {
  this.width = w
  this.height = h
}
function Square (n) {
  Rectangle.call(this, n, n)
}

Rectangle.prototype.area = function () {
  return this.width * this.height
}
Square.prototype = new Rectangle()

Rectangle.prototype.description = function () {
  console.log('Rectangle of width ' + this.width + ', height ' + this.height + ' and area ' + this.area() + '.')
}
Square.prototype.description = function () {
  console.log('Square of side ' + this.width + ' and area ' + this.area() + '.')
}
