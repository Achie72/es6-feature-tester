var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var l10nUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
var l10nGBP = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });
var l10nEUR = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });
assert(l10nUSD.format(100200300.40) === "$100,200,300.40");
assert(l10nGBP.format(100200300.40) === "£100,200,300.40");
assert(l10nEUR.format(100200300.40) === "100.200.300,40 €");
