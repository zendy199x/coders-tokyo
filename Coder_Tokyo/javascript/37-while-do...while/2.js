/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */

var i =1000;
while(i>=0){
  if(i%3==0 && i%5 ==0){
    console.log(i);
    break;
  }
  i--;
}
