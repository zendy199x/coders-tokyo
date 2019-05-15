var memberCard = {
    tier: 'sliver'
};

function getTotal(price, card) {
  var discountRate;
switch (card.tier) {
    case 'bronze' :
        discountRate = 0.02;
        break;
    case 'sliver' :
        discountRate = 0.05;
        break;
    case 'gold' :
        discountRate = 0.08;
        break;
    default : 
        discountRate = 0.1;
        break;
}
    return price * ( 1 - discountRate);
}

var total = getTotal(500000, memberCard);
console.log(total);

//red, green, orange
var traffickLight = 'orange';
function goOrNotInVietNam(lightValue) {
    switch (lightValue) {
        case 'green' :
        case 'orange' :
        console.log('go');
        break;
    default: 
        console.log('stop');
        break;
    }
}

goOrNotInVietNam(traffickLight);