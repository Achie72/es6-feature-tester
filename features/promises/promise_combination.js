var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var res = []
var promise1 = Promise.resolve("foo");
var promise2 = new Promise( function(resolve,reject) {
  resolve("bar")
})

Promise.all([promise1, promise2]).then(function(values) {
  assert(values == "foo,bar")
});
