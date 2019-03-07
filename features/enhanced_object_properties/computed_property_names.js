var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var obj = {
    foo: "bar",
    [ "baz" + "quux" ]: 42
}
assert(Object.keys(obj) == "foo,bazquux")
assert(obj.foo == "bar")
assert(obj.bazquux == 42)
