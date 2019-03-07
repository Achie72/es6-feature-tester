var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
assert(Symbol.for("app.foo") === Symbol.for("app.foo"))
var foo = Symbol.for("app.foo")
var bar = Symbol.for("app.bar")
assert(Symbol.keyFor(foo) === "app.foo")
assert(Symbol.keyFor(bar) === "app.bar")
assert(typeof foo === "symbol")
assert(typeof bar === "symbol")
var obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
assert(JSON.stringify(obj).toString() === ("{}").toString() ) // {}
assert(JSON.stringify(Object.keys(obj)).toString() === ("[]").toString()) // []
assert(JSON.stringify(Object.getOwnPropertyNames(obj)).toString() === ("[]").toString()) // []
assert((Object.getOwnPropertySymbols(obj))[0].toString() === "Symbol(app.foo)")
assert((Object.getOwnPropertySymbols(obj))[1].toString() === "Symbol(app.bar)")