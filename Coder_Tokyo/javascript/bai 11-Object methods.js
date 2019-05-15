/*var myDog = {
    weight: 5,
    name: 'Đần',
    age: 1,
    bark : function () {//anonymus funtion
        console.log('meo meo, my name is', this.name);
    },
    eat: function(bone) {
    this.weight = this.weight + bone.weight;
    return this;
    }
};
myDog.bark();

var bone = {weight: 0.5};
console.log('Before eating', myDog.weight);

myDog.eat(bone);
console.log('After eating', myDog.weight);*/


//myDog.bark();
//function back () {
//   console.log('meo meo, my name is', this.name);
//};
//back();
/* Bài tập*/
/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */
var rectangle = {
    width: 10,
    height: 15,
    getWidth: function () {
        console.log(this.width);
    },
    getHeight: function () {
        console.log(this.height);
    },
    getArea: function () {
        console.log((this.width + this.height) * 2);
    },
}
rectangle.getWidth();
rectangle.getHeight();
rectangle.getArea();
/*Bài tập Bonus*/
var me = {
    height: 160,
    isHappy: true,
    love: function(myLove) {
    this.height = this.height + myLove.height;
    }
};
var myLove = { height: 15};

console.log('Before loving', me.height);
me.love(myLove);
console.log('After loving', me.height);
