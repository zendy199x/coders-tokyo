/**
 * Tính số ms chênh lệch giữa 2 date object bất kì
 */
function diffMs(a, b) {
console.log(a.getTime() - b.getTime());
}
// viết ví dụ để kiểm tra

diffMs(new Date(), new Date(2019, 03, 13))