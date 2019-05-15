// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a,b,c){
    var sort = [a, b, c].sort(( a, b) => a-b )
        console.log(sort[2]);
}

findMax(10, 6, 7)