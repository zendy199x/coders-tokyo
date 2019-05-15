/* 
  Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
*/

function powerup(arr) {
    var number1 = arr.filter((a => a %2 === 0),[]);
    var number2 = arr.filter((a => a %2 !== 0),[]);
    console.log(number1.map(a => a * a).concat(number2))
}
powerup([0, 3, 6, 7, 4]); // [0, 3, 36, 7, 16] 