var cat = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse) {
        this.stomach.push(mouse)
        return this
    }
};
function Mouse(weight, color) {
    this.weight = weight;
    this.color = color;
}

var mouse1 = new Mouse(1, 'blue');
var mouse2 = new Mouse(0.8, 'black');
cat.eat(mouse1).eat(mouse2);
console.log(cat);

  
  
