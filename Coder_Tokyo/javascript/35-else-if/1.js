function getMarried (obj){
    if ( me.age > 25) {
        return 'Cần lấy vợ';
    } else if ( me.age < 18) {
        return 'Không nên lấy vợ';
    } else return 'Tùy số';
}
var me = {
    age: 30,
}

console.log(getMarried(me));