var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
import * as math from "../../feature-lib/maths";
assert("2π = " + math.sum(math.pi, math.pi) == "2π = 6.283186");

