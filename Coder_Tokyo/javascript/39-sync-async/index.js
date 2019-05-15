//Sync vs Async

var fs = require('fs');

console.log('Start');
var song1 = fs.readFileSync('song1.txt',{encoding: 'utf8'});
console.log(song1);
var song2 = fs.readFileSync('song2.txt',{encoding: 'utf8'});
console.log(song2);
console.log('End');

// Make coffe -> 5 minutes
// Wear clothes
// Making bed

//Sync
//|--------------------|-----------------|------------|--->
// Make coffe         Coffe done        Wear done   Done
//                    Wear clothes      Make bed
//Async
//|--------------------|-----------------|------------|-------->
// Make coffe       Make bed            Done
// Wear clothes
console.log('Start');
fs.readFile('song1.txt', {encoding: 'utf8'}, function(err, song1) {
    console.log(song1);
});
fs.readFile('song2.txt',{encoding:'utf8'}, function (err, song2) {
    console.log(song2);
});
console.log('End');

// Read/Write to FS
// Network