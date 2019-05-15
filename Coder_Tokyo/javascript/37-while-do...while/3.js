/**
 * Thử chạy code sau
 */
var secretPassword = 'coders.tokyo';
var readline = require('readline-sync');
var i = 5;


/**
 * Viết đoạn chương trình yêu cầu người dùng nhập vào mật khẩu (để login vô máy tính chẳng hạn), nếu người dùng nhập sai, hiển thị ra "Wrong password", nhập đúng thì hiển thị ra "Welcome!"
 */
while (i >= 1) {
    var result = readline.question('What is your password ?...');
    if (result === secretPassword) {
    console.log('Đăng nhập thành công !');
    console.log(result);
    break;
    } 
    if (result !== secretPassword) {
    console.log('Đăng nhập thất bại !');
    console.log(result);
    }
    i --;
    console.log('Còn', i, 'lần');
}
