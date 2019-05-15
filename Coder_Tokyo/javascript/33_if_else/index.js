function sum(money){
    var totals = 0;
    for ( var bill of money) {
        if (!bill.fake) {
            totals += bill.value
        }
        else {
            console.log('Fake bill', bill);
            //break;
        }
    }
console.log(totals)
}

var money = [
   { value: 20000, fake: true},
   { value: 30000, fake: false},
   { value: 50000, fake: false},
   { value: 70000, fake: true},
]
sum(money);
