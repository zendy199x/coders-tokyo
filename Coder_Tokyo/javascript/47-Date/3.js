/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ cách ngày được truyền vào n ngày
 */
function subtractDays(date, n) {
 console.log(new Date(date.getTime()- n*24*1000*60*60 + 7*1000*60*60));
}

subtractDays(new Date(), 5);