var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var l10nEN = new Intl.NumberFormat("en-US");
var l10nDE = new Intl.NumberFormat("de-DE");
assert(l10nEN.format(1234567.89) === "1,234,567.89");
assert(l10nDE.format(1234567.89) === "1.234.567,89");