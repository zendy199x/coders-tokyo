// Viết hàm lấy extension của một file
var path = require('path');
function getExtensionFilename(filename) {
    return path.extname(filename)
}

var extension =  getExtensionFilename('./..bai 10- funtion.js')
console.log(extension);