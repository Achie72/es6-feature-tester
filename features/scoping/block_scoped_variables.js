var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
for (let i = 0; i < a.length; i++) {
    let x = a[i]
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
assert(callbacks[0]() === 0)
assert(callbacks[1]() === 2)
assert(callbacks[2]() === 4)