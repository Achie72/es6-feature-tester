var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
const a = 5;
if (true) {
	const a = 8;
	assert(a === 8)
}
assert(a == 5)
