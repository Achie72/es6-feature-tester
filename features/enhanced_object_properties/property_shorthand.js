var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var x = 0
var y = 0
var obj = {x, y}
assert(obj.x === 0)
assert(obj.y === 0)