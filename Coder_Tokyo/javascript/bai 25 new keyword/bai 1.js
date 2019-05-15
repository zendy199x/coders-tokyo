/* 
  Tạo một đối tượng student có thông tin như sau:
  Tên: Herry,
  Giới tính: Nam,
  Tuổi: 18
  
  Viết hàm showInfo để in ra các thông tin của đối tượng đó.
*/

var student = {
  name: 'Herry',
  gender: 'male',
  age: 18,
}
function showInfo(){
    for(let k in student){
    console.log(k + ":" + student[k]);
    }
}
showInfo(); // In ra tất cả thông tin của đối tượng