// Bài tập: Viết hàm tính thể tích khối hộp.
// Nhận vào các tham số như dưới, trả về thể tích của khối hộp.


function getBoxVolume(w, h, l) {
    return w * h * l 
  }
  console.log(getBoxVolume(10, 20, 30)); // 6000
  console.log(getBoxVolume(4, 5, 6)); // 120
function Calculate(a,h) { 
    return a * h / 2
}//chu vi hình chữ nhật
Calculate(10,5);
console.log(Calculate(5,10));


function CalculateDiscSquare(r) {
    return r * r * 3.14
}/*diện tích hình tròn*/
console.log(CalculateDiscSquare(10));


function Scn(a,b) {
    return a * b
}/*diện tích hình chữ nhật*/
console.log(Scn(5,6));


function Vkh(a,b,c) {
    return a * b * c
}/*thể tích khối hộp*/
console.log(Vkh(2,3,7));


