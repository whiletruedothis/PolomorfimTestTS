"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sail_1 = require("../Sail");
var Article_1 = require("../Article");
var Service_1 = require("../Service");
test('must return 0 for a empty sail', function () {
    var mySail = new Sail_1.Sail([]);
    expect(mySail.getTotal()).toBe(0);
});
test('must return 2 for a sail of a article', function () {
    var milk = new Article_1.Article('milk', 2);
    var listOfProducts = [milk];
    var testSail = new Sail_1.Sail(listOfProducts);
    expect(testSail.getTotal()).toBe(2);
});
test('must return 3 for a sail of a service', function () {
    var water = new Service_1.Service('water', 3);
    var listOfProducts = [water];
    var testSail = new Sail_1.Sail(listOfProducts);
    expect(testSail.getTotal()).toBe(3);
});
test('must return 5 for a sail of a service and a article', function () {
    var water = new Service_1.Service('water', 3);
    var milk = new Article_1.Article('milk', 2);
    var listOfProducts = [water, milk];
    var testSail = new Sail_1.Sail(listOfProducts);
    expect(testSail.getTotal()).toBe(5);
});
//# sourceMappingURL=Sail.test.js.map