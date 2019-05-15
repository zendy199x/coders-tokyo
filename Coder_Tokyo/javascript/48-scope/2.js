var a = 1;

var b = {
  a: 2,
  foo: function() {
    console.log(this.a);
  }
};

b.foo();

var fooCopy = b.foo;
fooCopy();
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13
// từ khóa this trong foo() của object b truy xuất đến property a nằm trong object b
// b.foo không nằm trong object b sẽ không thể gọi this.a nên trả về undefined.