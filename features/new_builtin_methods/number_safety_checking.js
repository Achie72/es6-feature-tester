var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
assert(Number.isSafeInteger(42))
assert(!Number.isSafeInteger(9007199254740992))