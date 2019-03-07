var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
assert(a == 1)
assert(b == 3)