/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
function diff(fromDate, toDate) {
  var date1 = new Date(fromDate);
  var date2 = new Date(toDate);
  var diff = date2.getTime() - date1.getTime();
  return Math.floor(diff/86400000);
}

var start = new Date(2019, 1, 10);
var end = new Date();

console.log(diff(start, end));

