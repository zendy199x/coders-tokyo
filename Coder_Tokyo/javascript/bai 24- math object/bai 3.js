/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.

  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
  var answer = arr.map(a => a*a)
  console.log(answer.map(a => Math.sqrt(a)))
}
positiveNumber([-2, 3, -4, -7, 10]); // [ 2, 3, 4, 7, 10 ]