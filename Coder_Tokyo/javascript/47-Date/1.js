/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), ngược lại trả về false
 */
function isWeekend(dateString) {
  var date = new Date(dateString);
  if ( date.getDay() === 0 || date.getDay() === 6) {
      return true
  } 
  return false;
}

console.log(isWeekend('2018/09/08'));
console.log(isWeekend('2018/09/07'));