/* 
  Viết hàm circleMachine() tính chu vi và diện tích hình tròn khi biết bán kính
*/

function circleMachine(r) {
  var p = 2 * r * Math.PI;
  var s = Math.pow(r, 2) * Math.PI;
  console.log('Chu vi', p);
  console.log('Diện tích', s);
}

circleMachine(3);
// Chu vi: 18.85
// Diện tích: 28.27