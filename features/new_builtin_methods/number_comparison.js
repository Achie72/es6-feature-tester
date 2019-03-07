var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var EPSILON = Math.pow(2,-16)
assert(0.1 + 0.2 != 0.3) // false
assert(Math.abs((0.1 + 0.2) - 0.3) < EPSILON) // true