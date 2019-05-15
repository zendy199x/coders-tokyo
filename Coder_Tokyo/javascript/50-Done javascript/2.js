// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
function capitalize(str) {
	var newstring = str.toLowerCase().replace(/(^|\s)\S/g,
  (firstLetter) => firstLetter.toUpperCase());
  console.log(newstring);
}

capitalize('tôi rất  là đần độn')