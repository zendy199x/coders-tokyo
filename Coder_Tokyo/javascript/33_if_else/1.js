/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
    var max = 0;
 for( var i = 0; i < arr.length; i ++) {
     if (arr[i] > max){
         max = arr[i];
     }
     else { max = max} 
 }
 console.log(max);
}

max([5, 6, 9,100, 56, 24, 78, 200, 1]); // 200