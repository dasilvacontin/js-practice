function Rectangle (w, h) {
  this.width = w
  this.height = h
  this.type = 'Rectangle'
  this.description = function () {
    return 'Rectangle of width ' + this.width + ', height ' + this.height + ' and area ' + this.area() + '.'
  }
}

Rectangle.prototype.area = function () {
  return this.width * this.height
}

module.exports = Rectangle
