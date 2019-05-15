console.log('Bài 1: bài toán hiển thị ra màn hình 0-9');

for (var i = 0; i < 10; i ++) {
    console.log(i);
}
/*console.log('============');
for (var i = 9; i >= 0; i--) {
    console.log(i);
}
var danhSachlop = [
    { name: 'an', age: 20 },
    { name: 'cuong', age: 25},
    { name: 'tung', age: 23},
];
for (i = 0; i < 3; i ++) {
    console.log(danhSachlop[i].name);
}*/

console.log('Bài 2:Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.');
/*
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: console.log(String.fromCharCode(97)) sẽ hiển thị ra màn hình chữ "a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */
for (String.fromCharCode(i = 97); 97 <= i, i <= 122;i ++ ) {
     console.log(String.fromCharCode(i));
};


var a = [1, 2, 4, 8, 16];
console.log('Bài 3:Sử dụng vòng lặp for để hiển thị ra màn hình các phần tử của mảng a theo thứ tự ngược lại:');
/*
 * 16
 * 8
 * 4
 * 2
 * 1
 */

for (i = 16; i >=1 ; i /=2) {
    console.log(i);
}

var a1 = [1, 2, 3, 4, 5];
var b1 = [10, 20, 30];
console.log('Bài 4: Sử dụng vòng lặp for để tính tích của các phần tử của array a với các phần tử của array b');
/**
 * . Kết quả mong muốn:
 * 10
 * 20
 * 30
 * ...
 * 20
 * 40
 * 60
 * ...
 * Gợi ý: Dùng nested for loops (các vòng lặp lồng nhau)
 */
for ( a1[i =0]; i <= 4; i ++ ) {
    for (b1[j = 0]; j <=2; j ++) {
        console.log(a1[i] * b1[j]);
    }
}


console.log('Bài 5: Viết function trả về tích các số từ start đến end, không tính end)');
/**
 * Ví dụ: console.log(calculate(2, 5)) sẽ hiển thị ra màn hình 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
        j = 1;
        for ( i = start; i < end ; i ++) {
            j*=i
        };
        return j;
    }
console.log(calculate(2,5));

console.log('bài 6:sử dụng vòng lặp for...of viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không ');


function has(array, value) {
    for ( i = 0; i < array.length; i++) {
        if (array[i] === value){
            return true;
        };
    }
        if ( array[i] !== value){
            return false;
        }
    
}
console.log(has([1,2,3],2));
