//Viêt 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str){ 
 var nump = 0;
 var numt = 0;
 for ( var i = 0; i < str.length; i ++) {
     if (str[i] === 'p') { nump ++}
     if (str[i] === 't') { numt ++} 
 }
 if (str === '') {console.log('empty string')}
 else
 if (nump === numt) {return true, console.log('true')}
 if (nump !== numt) {return false, console.log('false')}
}
equal_pt('pppptttt')