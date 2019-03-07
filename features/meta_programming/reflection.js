var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var obj = { a: 1 };
Object.defineProperty(obj, "b", { value: 2 });
//obj[Symbol("c")] = 3;
assert(Reflect.ownKeys(obj) === ["a","b"]); // [ "a", "b", Symbol(c) ]
