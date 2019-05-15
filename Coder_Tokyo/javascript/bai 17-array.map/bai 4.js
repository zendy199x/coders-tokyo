// 1) Make an array of numbers that are doubles of the first array
// function doubleNumbers(arr){
    var me = [2, 5, 100];
    
    function doubleNumbers (arr) {
        var done = arr.map(value => value * 2)
            return done     
}
     // [4, 10, 200]
    console.log(doubleNumbers (me));
    
    // 2) Take an array of numbers and make them strings
    function stringItUp(arr){
      var str = arr.map(function(strings){
        return strings.toString()
      })
      return str
    }
    
    var answer = stringItUp([2, 5, 100]); // ["2", "5", "100"]
    console.log(answer)
    
    // // 3) Capitalize each of an array of names
    // function capitalizeNames(arr) {
    //   var capitol = arr.map(function(caps) {
    //     return caps.charAt(0).toUpperCase() + caps.slice(1)
    //   });
    //   return capitol;
    // }
    
    // var answer = capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
    
    // console.log(answer);
    
    // // 4) Make an array of strings of the names
    // function namesOnly(arr) {
    //   var makeArr = arr.map(function(value) {
    //     return value.name;
    //   });
    //   return makeArr;
    // }
    
    // var answer = namesOnly([
    //   {
    //     name: "Angelina Jolie",
    //     age: 80
    //   },
    //   {
    //     name: "Eric Jones",
    //     age: 2
    //   },
    //   {
    //     name: "Paris Hilton",
    //     age: 5
    //   },
    //   {
    //     name: "Kayne West",
    //     age: 16
    //   },
    //   {
    //     name: "Bob Ziroll",
    //     age: 100
    //   }
    // ]);
    // // // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
    // console.log(answer);
    
    // // 5) Make an array of strings of the names saying whether or not they can go to The Matrix
    // function makeStrings(arr) {
    //   var arrayToStrings = arr.map(function(value) {
    //     if (value.age > 18) {
    //       return value.name + " can go see the matrix";
    //     } else {
    //       return value.name + "is under age";
    //     }
    //   });
    //   return arrayToStrings;
    // }
    
    // var answer = makeStrings([
    //   {
    //     name: "Angelina Jolie",
    //     age: 80
    //   },
    //   {
    //     name: "Eric Jones",
    //     age: 2
    //   },
    //   {
    //     name: "Paris Hilton",
    //     age: 5
    //   },
    //   {
    //     name: "Kayne West",
    //     age: 16
    //   },
    //   {
    //     name: "Bob Ziroll",
    //     age: 100
    //   }
    // ]);
    // console.log(answer)
    // ["Angelina Jolie can go to The Matrix",
    // "Eric Jones is under age!!",
    // "Paris Hilton is under age!!",
    // "Kayne West is under age!!",
    // "Bob Ziroll can go to The Matrix"]
    
    // // 6) Make an array of the names in h1s, and the ages in h2s
    // // "<h1>Angelina Jolie</h1><h2>80</h2>"
    // function readyToPutInTheDOM(arr) {
    //   var names = arr.map(function(value) {
    //     return '<h1>'+ value.name + "</h1><h2>" + value.age + "</h2>"
    //   });
    //   return names
    // }
    
    // var answer= readyToPutInTheDOM([
    //   {
    //     name: "Angelina Jolie",
    //     age: 80
    //   },
    //   {
    //     name: "Eric Jones",
    //     age: 2
    //   },
    //   {
    //     name: "Paris Hilton",
    //     age: 5
    //   },
    //   {
    //     name: "Kayne West",
    //     age: 16
    //   },
    //   {
    //     name: "Bob Ziroll",
    //     age: 100
    //   }
    // ]);
    // console.log(answer)
    // // ["<h1>Angelina Jolie</h1><h2>80</h2>",
    // // "<h1>Eric Jones</h1><h2>2</h2>",
    // // "<h1>Paris Hilton</h1><h2>5</h2>",
    // // "<h1>Kayne West</h1><h2>16</h2>",
    // // "<h1>Bob Ziroll</h1><h2>100</h2>"]