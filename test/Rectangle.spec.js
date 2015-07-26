var test = require('tape')

var Rectangle = require('../src/Rectangle.js')

test('Rectangle constructor', function (t) {
  t.plan(3)

  t.equal(typeof Rectangle, 'function', 'should be a function')
  var rec = new Rectangle(5, 10)
  t.equal(rec.width, 5, 'should set rectangle width')
  t.equal(rec.height, 10, 'should set rectangle height')
})

test('Rectangle::area', function (t) {
  t.plan(3)

  var rec = new Rectangle(5, 10)
  t.equal(typeof rec.area, 'function', 'should be a function')
  t.equal(rec.area(), 50, 'should calculate correctly')
  t.ok(Rectangle.prototype.hasOwnProperty('area'), 'resides in prototype')
})

test('Rectangle::description', function (t) {
  t.plan(2)

  var rec = new Rectangle(5, 10)
  t.equal(typeof rec.description, 'function', 'should be a function')
  t.equal(rec.description(), 'Rectangle of width 5, height 10 and area 50.', 'should return rectangle\'s description')
})
