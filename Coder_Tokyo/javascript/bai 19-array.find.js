// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
 console.log(array.find(value => value %2 === 0))
};
me = [ 3, 5, 6, 7, 9]
findFirstEvenNumber(me);