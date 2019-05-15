/** Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
 * 
 * Bắt đầu từ bài này các câu hỏi sẽ xuất hiện bằng tiếng Anh nhiều hơn.
 * Đây cũng là một kĩ năng không thể thiếu của develop vì: các nguồn tra cứu tốt đa phần là tiếng Anh, ví dụ như stackoverflow.com
*/

function first(arr, n) {
console.log(arr.slice(0, n))
}

first([1, 2, 3], 2); // expect [1, 2]