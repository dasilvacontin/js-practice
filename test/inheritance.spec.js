var test = require('tape')

var constructors = require('../src/inheritance.js')
var Rectangle = constructors.Rectangle
var Square = constructors.Square

test('Rectangle and Square constructors should set width and height', function (t) {
  t.plan(4)

  var rec = new Rectangle(5, 10)
  t.equal(rec.width, 5, 'should set rectangle width')
  t.equal(rec.height, 10, 'should set rectangle height')

  var squ = new Square(7)
  t.equal(squ.width, 7, 'should set square width')
  t.equal(squ.height, 7, 'should set square height')
})

test('Rectangle and Square area can be calculated', function (t) {
  t.plan(5)

  var rec = new Rectangle(5, 10)
  t.equal(rec.area(), 50, 'rectangle area')

  var squ = new Square(7)
  t.equal(squ.area(), 49, 'square area')

  t.equal(squ.area, rec.area, 'Square inherits area method from Rectangle')
  t.ok(Rectangle.prototype.hasOwnProperty('area'), 'area method in Rectangle prototype')
  t.notOk(Square.prototype.hasOwnProperty('area'), 'area method not in Square prototype')
})

test('Rectangle and Square description', function (t) {
  t.plan(2)

  var rec = new Rectangle(5, 10)
  t.equal(rec.description(), 'Rectangle of width 5, height 10 and area 50.', 'should describe rectangle')

  var squ = new Square(7)
  t.equal(squ.description(), 'Square of side 7 and area 49.', 'should describe square')
})
