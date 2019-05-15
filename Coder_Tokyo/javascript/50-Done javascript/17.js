function maxOfSumChain(arr,k){
    var sort = arr.sort(( a, b) => b - a );
    var sum = 0;
    for( i = 0; i < k; i ++) {
        sum += sort[i]
    }
    return sum
}

var test = maxOfSumChain([1,3,2,6,2],3)
console.log(test);


// describe('Maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers', function () {
//    it('return 5 when sumChain([1,3,2],2)', function () {
//    		 expect(maxOfSumChain([1,3,2],2).to.eql(5));
//    });
//    it('return 11 when sumChain([1,3,2,6,2],3)', function () {
//    		 expect(maxOfSumChain([1,3,2,6,2],3).to.eql(11));
//    });
// });