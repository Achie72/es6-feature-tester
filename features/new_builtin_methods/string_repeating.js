var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var depth = 3
assert(" ".repeat(4 * depth) == "            ")
assert("foo".repeat(3) == "foofoofoo")