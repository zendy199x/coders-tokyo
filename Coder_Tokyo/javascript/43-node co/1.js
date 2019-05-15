/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
  ];
  
  // Cách 1: Sử dụng vòng lặp for
  // Cách 2: Sử dụng array.map
  // Gợi ý: Có thể yield 1 array các Promise
var co = require('co')
var axios = require('axios');
function load(path){
    return axios.get(path);
  };

co(function*(){
  var values = yield [
  load('https://jsonplaceholder.typicode.com/todos/1'),
  load('https://jsonplaceholder.typicode.com/todos/2'),
  load('https://jsonplaceholder.typicode.com/todos/3'),
  load('https://jsonplaceholder.typicode.com/todos/4'),
  load('https://jsonplaceholder.typicode.com/todos/5')
];
  return values;
}).then(function(item){
  for(var i =0;i<item.length;i++){
    console.log(item[i].data)
  }
}).catch(function(error){
  console.log(error)
})

//c2
requestURL = co.wrap(function*(arr){
    var values = yield arr.map(function(item){
      return load(item);
    })
    return values;
  })
  
requestURL(urls)
.then(function(value){
      for(var i =0; i<value.length; i++){
        console.log(value[i].data)
      }
    })
.catch(function(error){
      console.log(error);
    })