var Rectangle = require('./Rectangle.js')

function Square( side ) {
	this.side = side
	this.w = side
	this.h = side
}

Square.prototype = new Rectangle()

