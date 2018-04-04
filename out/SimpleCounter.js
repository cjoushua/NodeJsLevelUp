var SimpleCounter = /** @class */ (function () {
    function SimpleCounter() {
    }
    SimpleCounter.prototype.count = function () {
        var count = 5;
        for (count; count++; count <= 7) {
            console.log(count);
        }
        console.log("All doen!");
    };
    return SimpleCounter;
}());
var count = new SimpleCounter();
count.count();
//# sourceMappingURL=SimpleCounter.js.map