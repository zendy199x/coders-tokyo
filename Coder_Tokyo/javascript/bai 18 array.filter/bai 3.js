// Given a list of students, filter out the female ones
function filterOutFemales(members) {
    console.log(members.filter(value => value.gender !== 'female' ))
   
}
var members = [
{ name: 'Lan', gender: 'female' },
{ name: 'Linh', gender: 'female' },
{ name: 'Trung', gender: 'male' },
{ name: 'Peter', gender: 'gay' }
];

filterOutFemales(members);