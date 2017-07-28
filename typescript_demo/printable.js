var circle = {
    print: function () { return console.log("Circle to be printed"); }
};
var employee = {
    print: function () { return console.log("Employee to be printed"); }
};
var arr = [circle, employee];
function printAll(arr) {
    arr.forEach(function (element) {
        element.print();
    });
}
printAll(arr);
