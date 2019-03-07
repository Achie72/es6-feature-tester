var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
assert([ 1, 3, 4, 2 ].find(x => x > 3) === 4) // 4
assert([ 1, 3, 4, 2 ].findIndex(x => x > 3) === 2) // 2