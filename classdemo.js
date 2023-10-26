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
var student = /** @class */ (function () {
    function student(sid, name, age, email) {
        this.studentId = sid;
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Object.defineProperty(student.prototype, "getage", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "setage", {
        set: function (age) {
            if (Eligibility(age)) {
                this.age = age;
            }
        },
        enumerable: false,
        configurable: true
    });
    return student;
}());
//demonstrate use of protected
var modifymail = /** @class */ (function (_super) {
    __extends(modifymail, _super);
    function modifymail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    modifymail.prototype.changemail = function (emailid) {
        this.email = emailid;
    };
    return modifymail;
}(student));
var Gagan = new student("12si2112", "Gagan", 22, "Gagan@gmail.com");
console.log(Gagan);
//demonstrate use of private
if (Eligibility(Gagan.getage)) {
    console.log("Eligible to vote");
}
function Eligibility(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
//demonstrate use of protected
var newmail = new modifymail("12si2112", "Gagan", 22, "Gagan@gmail.com");
newmail.changemail("gagan@intimetec.com");
console.log(newmail);
