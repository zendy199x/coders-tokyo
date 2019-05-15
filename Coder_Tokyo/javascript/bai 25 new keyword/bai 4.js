/* 
  Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
    {
      color: String,
      shape: String,
      fill: boolean
    }
*/

function Shape(color, shape, fill) {
    this.color = color;
    this.shape = shape;
    this.fill = fill;
  }
  
  var shape1 = new Shape("red", "rectangle", true);
  var shape2 = new Shape("orange", "triangle", false);
  var shape3 = new Shape("tomato", "circle", true);
  
  console.log(shape1, shape2, shape3);
  /* 
    Shape { color: 'red', shape: 'rectangle', fill: true } 
    Shape { color: 'orange', shape: 'triangle', fill: false } 
    Shape { color: 'tomato', shape: 'circle', fill: true }
  */