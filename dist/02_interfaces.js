function printLabel(labelObj) {
    console.log('Print', labelObj.label);
}
var myObj = { label: 'hello label', size: 100 };
printLabel(myObj);
function getSquareInfo(squareObj) {
    var info = { color: 'red', area: 10000 };
    if (squareObj.color) {
        info.color = squareObj.color;
    }
    if (squareObj.width) {
        info.area = squareObj.width * squareObj.width;
    }
    return info;
}
var mySquare = getSquareInfo({ color: 'yellow' });
var a = [1, 2, 3, 5];
var ra = a;
var mySearchFunc;
mySearchFunc = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myStringArray = ['Jack', 'Tom'];
var nameF = myStringArray[0];
var Clock = /** @class */ (function () {
    function Clock() {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var mySquareM = {};
mySquareM.color = 'green';
mySquareM.sideLength = 120;
// Hybird Types
// Interfaces Extending Classes
