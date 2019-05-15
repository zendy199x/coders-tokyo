// viết hàm Kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str){
	if (str.slice(0, 4) === "Java") {
        return true
    } return false
}

var test = startWith('Javacore')
console.log(test);