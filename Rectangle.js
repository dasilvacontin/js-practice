function Rectangle (w, h) {
  this.width = w
  this.height = h
  this.type = 'Rectangle'
}

Rectangle.prototype.area = function () {
  return this.width * this.height
}

Rectangle.prototype.description = function () {
  return 'Rectangle of width ' + this.width + ', height ' + this.height + ' and area ' + this.area() + '.'
}

module.exports = Rectangle
