var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
var target = {
    foo: "Welcome, foo"
};
var proxy = new Proxy(target, {
    get (receiver, name) {
        return name in receiver ? receiver[name] : `Hello, ${name}`;
    }
});
assert(proxy.foo   === "Welcome, foo");
assert(proxy.world === "Hello, world");