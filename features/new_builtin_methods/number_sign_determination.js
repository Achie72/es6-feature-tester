var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
assert((Math.sign(7)) == 1)   // 1
assert((Math.sign(0)) == 0)   // 0
assert((Math.sign(-0)) == -0)  // -0
assert((Math.sign(-7)) == -1)  // -1
assert(isNaN(Math.sign(NaN))) // NaN