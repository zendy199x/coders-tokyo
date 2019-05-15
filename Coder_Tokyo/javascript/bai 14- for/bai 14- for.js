// var employees = [
//     { name: 'tung', age: 23},
//     { name: 'dung', age: 24},
//     { name: 'quang', age: 26},
// ];

// for (var employee of employees) {
//     console.log(employee.name, employee.age);
// }

// var myDog = {
//     name: 'ngu',
//     age: 2,
//     weight: 8,
// };

// for (var key in myDog) {
//     console.log(key, myDog[key]);
// };

/** Bài 1
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */

console.log('Vòng lặp for...of trả về value của phần tử, vòng lặp for...in trả về index của phần tử');

var math = [ 5, 6, 'trung binh'];

for ( var information of math) {
    console.log(information);
};
console.log('=======');
for (var i in math) {
    console.log(i);
};


/** Bài 2
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) { 
    j = 1;
    for ( var i of arr ) {
            j *= i
    };
    return  j
};

// console.log(multiply([2, 3, 4])); // expect: 24


// /** Bài 3
//  * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
//  * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
//  */

var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
//   /**
//    * Kết quả mong muốn:
//    * bedroom
//    * area
//    * bed
//    * type
//    * price
//    * Chú ý: không cần hiển thị ra đúng thứ tự như trên
//    */
  
  //var key1 = Object.keys(apartment);
  // var key2 = Object.keys(apartment.bedroom);
  // var key3 = Object.keys(apartment.bedroom.bed);
  // var key23 = key2.concat(key3);
  // var keys = key1.concat(key23);
  
  // let result = '';
  // for( var item of keys ){
  //   result += item +'\n';
  // }
  // console.log(result);

  function printKey(obj) {
    for (var item in obj) {
      console.log(item);
      if (typeof obj[item] === "object") {
        printKey(obj[item]);
      }
    }
  }
  
  printKey(apartment);

//Bài 4:
function sum(numbers) {
    var j = 0;
    for ( var i of numbers) {
    j += i;
    }
return j
}

// // Giả thiết: numbers là một array các số nguyên
// // Yêu cầu: 
// //	- trả về tổng các số, dùng vòng lặp for ... of
// //  - nếu array trống trả về 0

function has(object, key) {
  for (var i in object) {
    if ( i === key) {
      return true
    }
  };
    if (i !== key) {
      return false
    }
}
var me = {
  name : 'tung',
  age : 23,
  gender: 'male'
};
console.log(has(me, 'name'));


    
      // viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
      // Tham số:
      //	- object: object cần kiểm tra
      //	- key: key cần kiểm tra xem có tồn tại trong object không
      // Return:
      //	- true nếu có tồn tại
      //	- false nếu không tồn tại