var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
assert(0b111110111 === 503)
assert(0o767 === 503)