// setTimeout
// clearTimeout
//setTimeout(fn, ms); //milliseconds
//timer
var done = function() {
    console.log('Finish');
}
console.log('Start');
var timeoutId = setTimeout(done, 2000);
console.log('Done');
//clearTimeout(timeoutId);