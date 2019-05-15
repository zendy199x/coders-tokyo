/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

// function findMostFrequent(arr) {
//     // Viêt hàm tại đây!
//     var answer = [];
//     var sort = arr.sort((a, b) => a -b);
//     var count = 1;
//     for( i = 0; i < arr.length; i ++) {
//         if (sort[i] === sort[i + 1]) {
//             count ++
//         } else { count = count, answer.push(sort[i])}
//     }
    
//     }

//     var test = findMostFrequent([6,6,6,2,2])
//     console.log(test);

// const abc = arr =>{
//     return arr.reduce((obj, item)=>{
//       return obj[item] ? {...obj, [item]: ++obj[item]} : {...obj,[item]:1}
//     },{})
//   }
//   const obj =abc([1,2,3,2,1,1,1])
//   let max= Math.max(...Object.values(obj))
//    Object.keys(obj).filter(item => obj[item] == max).reduce((obj2, item)=>{
//     return {...obj2, [item]: obj[item] }
//   }, {})