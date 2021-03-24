// Function Types
function add(a, b) {
    return a + b;
}
var myAdd = function (a, b) {
    return a + b;
};
add(1, 2);
myAdd(2, 4);
// Optional and Default Parameters
function buildName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
function buildNameV2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Tom'; }
    return firstName + ' ' + lastName;
}
// Rest Parameters
function buildNameV3(firstName) {
    var restNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restNames[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restNames.join(' ');
}
// this
