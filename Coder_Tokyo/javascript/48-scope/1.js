var a = 1;

function foo() {
  var a = 2;
  return a;
}

function bar() {
  a = 2;
  return a;
}

foo();
console.log(a); // Kết quả?
bar();
console.log(a); // Kết quả?
// Giải thích vì sao kết quả dòng 14 lại khác 16 bằng tiếng Việt hoặc tiếng Anh
//hàm foo chỉ tạo ra một biến a khác chứ không thay đổi giá trị global của a ( có var)
//hàm bar làm thay đổi giá trị global của a (không var)