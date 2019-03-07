var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var l10nEN = new Intl.DateTimeFormat("en-US");
var l10nDE = new Intl.DateTimeFormat("de-DE");
assert(l10nEN.format(new Date("2015-01-02")) === "1/2/2015");
assert(l10nDE.format(new Date("2015-01-02")) === "2.1.2015");