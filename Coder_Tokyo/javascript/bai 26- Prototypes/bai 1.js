/*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "Coders Tokyo".
*/

function Student(name, level) {
  this.name = name;
  this.level = level;
}
Student.prototype.school = 'Coders Tokyo';
var student1 = new Student("Herry", "01");
var student2 = new Student("Nancy", "02");
console.log(
  student1, student1.school, 
  student2, student2.school, 
);

/*
  Student { name: 'Herry', level: '01' } 'Coders Tokyo' 
  Student { name: 'Nancy', level: '02' } 'Coders Tokyo' 
*/