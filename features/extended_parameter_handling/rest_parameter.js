var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
function f (x, y, ...a) {
    return (x + y) * a.length
}
assert(f(1, 2, "hello", true, 7) === 9)