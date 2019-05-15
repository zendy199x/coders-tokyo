/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
function countDown(x) {
    var countDown = setInterval(()=>{
         console.log(x);
        --x;
          if(x == 0) {
        clearInterval(countDown);
        console.log('Happy new year');
          }
        },1000)
}

countDown(5);