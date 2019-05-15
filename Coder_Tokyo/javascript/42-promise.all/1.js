/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

var axios = require('axios');
var fs = require('fs')
var web1 = 'https://jsonplaceholder.typicode.com/todos/1';
var web2 = 'https://jsonplaceholder.typicode.com/todos/2';
var web3 = 'https://jsonplaceholder.typicode.com/todos/3'

Promise.all ([
    axios.get(web1).then(function(response) {
        console.log(response.data);
    }),
    axios.get(web2).then(function(response) {
        console.log(response.data);
    }),
    axios.get(web3).then(function(response) {
        console.log(response.data);
    }),
])
.then(function(values) {
return values
})
.catch(function(error) {
    console.log(error);
})
