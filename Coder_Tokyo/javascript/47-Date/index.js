// Date
// moment.js
var moment = require('moment')
var now = new Date();
var myBirthday = new Date(1995, 11, 20); //20-12-1995

// number of milliseconds from 1-1-1970 +7 +9
console.log(now.getTime());
console.log(now.getDay());
console.log(myBirthday.getTime());
console.log(myBirthday.getDay());

var now = moment();
console.log(now.format('DD/MM/YYYY'));