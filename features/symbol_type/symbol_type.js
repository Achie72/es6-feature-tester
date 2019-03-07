var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
assert(Symbol("foo") !== Symbol("foo"))
var foo = Symbol()
var bar = Symbol()
assert(typeof foo === "symbol")
assert(typeof bar === "symbol")
var obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
assert(JSON.stringify(obj).toString() === ("{}").toString() ) // {}
assert(JSON.stringify(Object.keys(obj)).toString() === ("[]").toString()) // []
assert((Object.getOwnPropertySymbols(obj))[0].toString() === "Symbol()")
assert((Object.getOwnPropertySymbols(obj))[1].toString() === "Symbol()")