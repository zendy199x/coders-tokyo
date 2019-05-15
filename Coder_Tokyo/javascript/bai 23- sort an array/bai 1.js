/**
 * Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự từ nhỏ đến lớn (ascending order)
 */
function sortNumbers(arr) {
    console.log(arr.sort((a, b) => a - b));
};

sortNumbers([5, 1, 3, 2]); // [1, 2, 3, 5]