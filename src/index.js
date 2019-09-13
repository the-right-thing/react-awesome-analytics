"use strict";
exports.__esModule = true;
var file_1 = require("./file");
var test = function (_a) {
    var a = _a.a, b = _a.b;
    return a + b;
};
var another = test({ a: 1, b: 2 });
var SomeClass = /** @class */ (function () {
    function SomeClass() {
        this.defaultProps = {
            a: file_1["default"]
        };
    }
    return SomeClass;
}());
exports["default"] = SomeClass;
