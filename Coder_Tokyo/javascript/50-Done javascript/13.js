function pyString(String) {
  // Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào.
  // Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
  // Tham số:
  // - String: chuỗi nhập vào lúc đầu.
  var py = 'Py'
   if ( String.slice(0, 2) === 'Py'){
     return String
   } return py.concat(String)
}

var test = pyString('tago')
console.log(test);