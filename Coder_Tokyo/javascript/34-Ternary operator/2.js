// Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
function doSomething(a) {
    if (a > 0) {
      b = 1;
    } else if (a < 0) {
      b = 2;
    } else {
      b = 3;
    }
    console.log(b);
}
  
function doSomethingTernary(a) {
    var b = (a > 0) ? '1' : '2'; var b =  (a = 0) ? '3' : '3';
    console.log(b);
}
  
  // Test 2 hàm trên với cùng đầu vào
  doSomething(0);
  doSomethingTernary(0);