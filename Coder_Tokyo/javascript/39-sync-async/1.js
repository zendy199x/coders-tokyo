/**
 * Sử dụng module `request` (https://www.npmjs.com/package/request) để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
 * https://randomuser.me/api/
 * 
 * Sử dụng console.time và console.timeEnd để hiển thị ra thời gian tải link. Tìm hiểu về 2 hàm này tại: https://alligator.io/js/console-time-timeend/
 * hoặc google 'console.time'
 */

var request = require('request');
var url = 'https://randomuser.me/api/';

console.time("Time this");
function getData() {
  return request(url, function(err, response, body) {
    console.log(response.body);
  })
}
getData();
console.timeEnd("Time this");


// var request = require('request');
// var fs = require('fs')
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))