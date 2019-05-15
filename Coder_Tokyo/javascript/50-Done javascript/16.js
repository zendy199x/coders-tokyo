function middleArray(arr1,arr2){
    var answer = []
    answer.push(arr1[1], arr2[1]);
    return answer
} 
var test = middleArray([1,9,2],[4,0,6])
console.log(test);



// describe('Make new array form the middle element of two array has length is 3', function () {
//    it('return [3,5] when middleArray([1,3,2],[4,5,6])', function () {
//    		 expect(middleArray([1,3,2],[4,5,6])).to.eql([3,5]);
//    });
// });