/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự của 1 chuỗi String cho trước thành 1 chuỗi
 String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
    // Viết hàm tại đây!
    if (str1.length !== str2.length) {
        return false
    }
    var arr1 = str1.split('');
    var arr2 = str2.split('');
    var sort1 = arr1.sort();
    var sort2 = arr2.sort();
    if( sort1.toString() === sort2.toString()) {
        return true
    } return false
}

var test = rearrangeChar('abc', 'cba')
console.log(test);

