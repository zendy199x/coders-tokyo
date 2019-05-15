/* 
  viết hàm updateObj để xóa thuộc tính rollno khỏi đối tượng student
  và in ra kết quả
*/

var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
  };
function updateObj() {
    function Student(name, sclass) {
      this.name = name;
      this.sclass = sclass;
    }
    var student1 = new Student(student.name, student.sclass)
    console.log(student1);
}
updateObj(); 

      // var student = { 
      //   name : "David Rayy", 
      //   sclass : "VI", 
      // }; 
  