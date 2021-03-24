var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class
var Greet = /** @class */ (function () {
    function Greet(greeting) {
        this.greeting = greeting;
    }
    ;
    Greet.prototype.greet = function () {
        console.log("hello, " + this.greet);
    };
    return Greet;
}());
var greeter = new Greet('world');
// Public, private, and protected modifiers
var Animal = /** @class */ (function () {
    function Animal(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    Animal.prototype.move = function (distance) {
        console.log(this.name + " moves " + distance + " m.");
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, sex, color) {
        var _this = _super.call(this, name, sex) || this;
        _this.color = color;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log(this.getName() + " is " + this.color);
    };
    return Dog;
}(Animal));
var ani = new Animal('jimmy', 'boy');
console.log(ani.move(3));
