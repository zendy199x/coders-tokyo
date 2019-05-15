console.log('bài 1');

var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2
// array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
console.log(a[0,1]===b[0,1]);

console.log('bài 2');

var a = {
    foo: 'bar'
  };
  
  var b = {
    foo: 'bar'
  };
  
  console.log(a === b);
  // Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2
  // object có vẻ giống nhau. Viết câu trả lời ở dưới đây.
console.log(a.foo === b.foo);

console.log('bài 3');

var a = '1000';
var b = '200';

console.log(a > b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 1000 trông có vẻ lớn hơn 200.
// Viết câu trả lời ở dưới đây.
/* giá trị trên mang kiểu dữ liệu là string*/
var a1 = 1000;
var b1 = 200;
console.log(a1 > b1);