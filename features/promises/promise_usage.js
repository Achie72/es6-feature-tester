var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
function msgAfterTimeout (msg, who) {
    return new Promise((resolve, reject) => {
        resolve(`${msg}Hello ${who}!`)
    })
}

msgAfterTimeout("", "Foo").then((msg) =>
    msgAfterTimeout(msg, "Bar")
).then((msg) => {
    assert(msg === "Hello Foo!Hello Bar!")
})