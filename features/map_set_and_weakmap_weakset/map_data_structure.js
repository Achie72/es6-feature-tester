var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var m = new Map()
var s = "alma"
m.set("hello", 42)
m.set(s, 34)
assert(m.get(s) === 34)
assert(m.get("hello") === 42);
assert(m.size === 2)
