var test = require('tape')

var constructors = require('../src/inheritance.js')
var Rectangle = constructors.Rectangle
var Square = constructors.Square

test('Rectangle constructor', function (t) {
  t.plan(3)

  t.equal(typeof Rectangle, 'function', 'should be a function')
  var rec = new Rectangle(5, 10)
  t.equal(rec.width, 5, 'should set rectangle width')
  t.equal(rec.height, 10, 'should set rectangle height')
})

test('Square constructor', function (t) {
  t.plan(3)

  t.equal(typeof Square, 'function', 'should be a function')
  var squ = new Square(7)
  t.equal(squ.width, 7, 'should set square width')
  t.equal(squ.height, 7, 'should set square height')
})

test('Rectangle::area', function (t) {
  t.plan(3)

  var rec = new Rectangle(5, 10)
  t.equal(typeof rec.area, 'function', 'should be a function')
  t.equal(rec.area(), 50, 'should calculate correctly')
  t.ok(Rectangle.prototype.hasOwnProperty('area'), 'resides in prototype')
})

test('Square::area', function (t) {
  t.plan(3)

  var squ = new Square(7)
  t.equal(typeof squ.area, 'function', 'should be a function')
  t.notOk(Square.prototype.hasOwnProperty('area'), 'should not reside in prototype')
  t.equal(squ.area, Rectangle.prototype.area, 'should be inherited from Rectangle')
})

test('Rectangle/Square::description', function (t) {
  t.plan(4)

  var rec = new Rectangle(5, 10)
  t.equal(typeof rec.description, 'function', 'should be a function')
  t.equal(rec.description(), 'Rectangle of width 5, height 10 and area 50.', 'should return rectangle\'s description')

  var squ = new Square(7)
  t.equal(typeof squ.description, 'function', 'should be a function')
  t.equal(squ.description(), 'Square of side 7 and area 49.', 'should return square\'s description')
})
