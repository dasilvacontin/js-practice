var fs = require('fs')
var debug = require('debug')('index')
var Persona = require('./Persona')

debug(Persona)
debug(Persona.toString)
debug(new Persona('Jaime', 25))

debug('\nLeo y muestro el archivo Persona.js\n')
debug(fs.readFileSync('./Persona.js').toString())

var Square = require('./Square')
var cuadrado = new Square(2)
debug(cuadrado.area())
