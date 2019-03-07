var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
import { sum, pi } from "../../feature-lib/maths";
assert("2π = " + sum(pi, pi) == "2π = 6.283186");