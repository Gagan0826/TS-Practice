"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var car = /** @class */ (function () {
    function car(color, maxspeed, no_of_seats) {
    }
    return car;
}());
var swift = /** @class */ (function (_super) {
    __extends(swift, _super);
    function swift(color, maxspeed, seats) {
        return _super.call(this, color, maxspeed, seats) || this;
    }
    swift.prototype.run = function () {
        console.log("Car is running");
    };
    return swift;
}(car));
var mySwift = new swift("Red", 200, 4);
mySwift.run();
