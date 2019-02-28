"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sail = /** @class */ (function () {
    function Sail(listsOfProducts) {
        this.listOfProducts = listsOfProducts;
    }
    Sail.prototype.getTotal = function () {
        var total = 0;
        if (this.listOfProducts != []) {
            for (var _i = 0, _a = this.listOfProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                total = total + product.price;
            }
        }
        return total;
    };
    return Sail;
}());
exports.Sail = Sail;
//# sourceMappingURL=Sail.js.map