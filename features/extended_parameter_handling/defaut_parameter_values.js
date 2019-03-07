var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
function f (x, y = 7, z = 42) {
    return x + y + z
}
assert(f(1) === 50)