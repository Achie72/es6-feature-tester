var assert = function (a) { if (!a) { throw Error("Assertion Failed")}}
{
    function foo () { return 1 }
    assert(foo() === 1)
    {
        function foo () { return 2 }
        assert(foo() === 2)
    }
    assert(foo() === 1)
}
