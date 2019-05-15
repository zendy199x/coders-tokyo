
  /*
  	- Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
    - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
    - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  */
 
 function findMaxDiff(arr) {
    var diffmax = 0;
    for ( i = 0; i < arr.length -1; i ++) {
      diff = arr[i] - arr[i+1];
     if (diffmax < Math.abs(diff)) {
            diffmax = diff
    } else diffmax = diffmax
    }
    console.log(diffmax);
}
 findMaxDiff([-1, 19, -9, 3])



