var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
function* range (start, end, step) {
    while (start < end) {
        yield start
        start += step
    }
}

for (var i of range(0, 10, 2)) {
    print(i) // 0, 2, 4, 6, 8
}