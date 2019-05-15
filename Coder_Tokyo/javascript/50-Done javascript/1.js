// Viết hàm đảo ngược chuỗi
function reverse(str) {
    var newstring = ''
    for ( var i = str.length - 1; i >= 0; i --) {
        newstring += str[i]
    }
    console.log(newstring);
}

reverse('tung')
