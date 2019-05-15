/**
 * Viết hàm xếp hạng theo điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
   if ( 0 <= score, score < 5) {
       return 'C'
   }
   if (5 <= score, score < 7) {
       return 'B'
   }
   else return 'A'
}

console.log(grade(4)); // C
console.log(grade(10)); // A