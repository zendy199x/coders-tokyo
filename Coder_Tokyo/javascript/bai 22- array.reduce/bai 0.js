var products = [
    {name: 'A', quantity: 2, unitPrice: 10},
    {name: 'B', quantity: 3, unitPrice: 20},
    {name: 'C', quantity: 6, unitPrice: 30},
    {name: 'D', quantity: 9, unitPrice: 15},
    {name: 'E', quantity: 11, unitPrice: 10},
]

console.log(products.reduce((a , b) => a + b.quantity * b.unitPrice, 0));

var items = [ 'Tom', 'Bill', 'Kim'];
//Use reduce to make this result
// '<Tom><Bill><Kim>'
console.log(items.reduce((a, b) => a  + '<' + b + '>', ''));