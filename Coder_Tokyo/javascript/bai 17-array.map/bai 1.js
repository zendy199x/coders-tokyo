/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Sử dụng map method và hàm tripple để nhân 3 các phần tử trong mảng dưới đây
 */
// Khai báo tripple function ở đây
function tripple(num) {
    return num *3
};



var numbers = [10, 5, 8];
// Gợi ý: numbers.map... (tự viết tiếp)
var numberAfter = numbers.map( x => tripple(x));
console.log(numberAfter);