var Circle = function (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
Circle.prototype.isOverlapped = function(arr) {
    var me =  Math.sqrt(Math.pow((this.x-arr.x),2) + Math.pow((this.y-arr.y),2)) - (this.radius + arr.radius);
    if (me > 0)  return '1';
    if (me < 0)  return '-1';
    if (me === 0)  return '0';
}
module.exports = Circle;