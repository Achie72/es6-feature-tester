var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
import exp, { pi, e } from "../../feature-lib/mathplusplus";
print("e^{π} = " + exp(pi));