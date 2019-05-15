function nearestTo100(a, b){
    if (Math.abs( 100 - a ) > Math.abs(100 - b)){
        return b
    } else return a
}

var test = nearestTo100( 89, 88)
console.log(test);