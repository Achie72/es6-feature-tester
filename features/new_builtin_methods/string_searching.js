var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
assert("hello".startsWith("ello", 1) == true) // true
assert("hello".endsWith("hell", 4) == true) // true
assert("hello".includes("ell") == true) // true
assert("hello".includes("ell", 1) == true) // true
assert("hello".includes("ell", 2) == false) // false