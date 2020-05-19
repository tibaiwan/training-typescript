//基础类型
// Boolean
var isDone = false;
// Number
var decimal = 8;
// String
var str = 'jimy';
// Array
var arr = [12, 4, 5];
var arr2 = [1, 3, 4];
// Tuple 元祖
var x = [1, '234'];
x = [2, 'xyz'];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Blue;
// Any
var notSure = 1;
notSure = '123';
// Void
function warnUser() {
    console.log('hello void');
}
// Null and Undefined
var u = undefined;
var n = null;
// never
function error(message) {
    throw new Error(message);
}
// Type assertions
var someValue = 'this is a string';
var strLen = someValue.length;
var someValue2 = 'this is a string';
var strLen2 = someValue2.length;
