var readlineSync = require('readline-sync');
//var userName = readlineSync.question('May I have your name ?');
//console.log('Hi' + ' ' +  userName + '!');


// var languages = [];
// var language = readlineSync.question('What is your mother language ?');
// languages.push(language);

// console.log(languages);


var pet = {};
var name = readlineSync.question('Your pet name ?');
var gender = readlineSync.question('Pet gender (Male/Female) ?');
var weight = readlineSync.question('Your pet weight ?')
pet.name = name;
pet.gender = gender;
pet.weight = weight;
console.log(pet);