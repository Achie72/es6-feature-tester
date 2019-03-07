var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var obj = { a: 1 }
var list = [ 1 ]
var { a, b = 2 } = obj
var [ x, y = 2 ] = list
assert(a === 1)
assert(b === 2)
assert(x === 1)
assert(y === 2)