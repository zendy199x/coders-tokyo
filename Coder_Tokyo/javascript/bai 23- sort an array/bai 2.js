/**
 * Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)
 */
function sortNumbers(arr) {
    console.log(arr.sort((a, b) => b - a));
}
sortNumbers([5, 1, 3, 2]); // [5, 3, 2, 1]