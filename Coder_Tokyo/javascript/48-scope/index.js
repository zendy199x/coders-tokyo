// scope
// 1. Global scope
// 2. Local scope
// When a function is executed -> creat a new scope
var a = 1;
var b = 2
function ramdom () {
    var b = Math.random();
    a = 3
    console.log(b);
}

function doSomething () {
    a = 5
    console.log(a);
}
console.log(b);
doSomething();
ramdom();
console.log(a);
