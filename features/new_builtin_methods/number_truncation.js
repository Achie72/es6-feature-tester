var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
assert(Math.trunc(42.7) == 42) // 42
assert(Math.trunc( 0.1) == 0) // 0
assert(Math.trunc(-0.1) == -0) // -0  