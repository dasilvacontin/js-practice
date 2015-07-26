var test = require('tape')

var Rectangle = require('../src/Rectangle.js')
var Square = require('../src/Square.js')

test('Square constructor', function (t) {
  t.plan(3)

  t.equal(typeof Square, 'function', 'should be a function')
  var squ = new Square(7)
  t.equal(squ.width, 7, 'should set square width')
  t.equal(squ.height, 7, 'should set square height')
})

test('Square::area', function (t) {
  t.plan(4)

  var squ = new Square(7)
  t.equal(typeof squ.area, 'function', 'should be a function')
  t.notOk(squ.hasOwnProperty('area'), 'should not be an instance property')
  t.notOk(Square.prototype.hasOwnProperty('area'), 'should not reside in prototype')
  t.equal(squ.area, Rectangle.prototype.area, 'should be inherited from Rectangle')
})

test('Square::description', function (t) {
  t.plan(2)

  var squ = new Square(7)
  t.equal(typeof squ.description, 'function', 'should be a function')
  t.equal(squ.description(), 'Square of side 7 and area 49.', 'should return square\'s description')
})
