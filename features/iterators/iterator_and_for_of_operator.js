var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var fibonacci = {
    [Symbol.iterator]() {
        var pre = 0, cur = 1
        return {
           next () {
                var tmp = cur
                cur = cur + pre
                pre = tmp
               return { done: false, value: cur }
           }
        }
    }
}
var results = [];

for (var n of fibonacci) {
    if (n > 1000)
        break
    results.push(n)
}
assert(results.toString() === "1,2,3,5,8,13,21,34,55,89,144,233,377,610,987")
