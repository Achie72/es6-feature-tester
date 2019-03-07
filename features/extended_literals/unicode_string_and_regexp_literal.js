var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
console.log("𠮷".length === 2)
console.log("𠮷".match("/./u")[0].length === 2)
console.log("𠮷" === "\uD842\uDFB7")
console.log("𠮷" === "\u{20BB7}")
console.log("𠮷".codePointAt(0) == 0x20BB7)
for (var codepoint of "𠮷") print(codepoint)