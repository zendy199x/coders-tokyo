/**
 * Viết hàm isTruthy nhận vào 1 giá trị, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */
//Cách 1
// function truthyOrFalsy(a) {
//     return a ? "truthy" : "falsy";
// };
// console.log(truthyOrFalsy(0));


 function isTruthy(x) {
    var falsy = [0, false, NaN, '', undefined, null];
    for ( var i = 0; i < falsy.length; i ++) {
        if (x === falsy[i]) {
            return false
        }
        else return true
    }
}
console.log(isTruthy(true));
console.log(isTruthy(0));
console.log(isTruthy([]));
console.log(isTruthy(1));

