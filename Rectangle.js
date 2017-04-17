function Rectangle (w, h) {
  this.width = w
  this.height = h
}

Rectangle.prototype.area = function () {
  return this.height * this.width
}

Rectangle.prototype.description = function () {
  return 'Rectangle of width ' + this.width + ', height ' + this.height + ' and area ' + this.area() + '.'
}

module.exports = Rectangle
