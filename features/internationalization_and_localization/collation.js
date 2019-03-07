var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
// in German,  "ä" sorts with "a"
// in Swedish, "ä" sorts after "z"
var list = [ "ä", "a", "z" ];
var l10nDE = new Intl.Collator("de");
var l10nSV = new Intl.Collator("sv");
l10nDE.compare("ä", "z") === -1;
l10nSV.compare("ä", "z") === +1;

assert(JSON.stringify(list.sort(l10nDE.compare)).toString() === ('["a","ä","z"]').toString()); // [ "a", "ä", "z" ]
assert(JSON.stringify(list.sort(l10nSV.compare)).toString() === ('["a","z","ä"]').toString()); // [ "a", "z", "ä" ]