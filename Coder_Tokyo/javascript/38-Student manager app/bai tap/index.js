/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var readlineSync = require('readline-sync');
var fs = require('fs');

var phoneList = [];

function loadData() {
    var data = fs.readFileSync('./dataphone.json');
    phoneList = JSON.parse(data);
}

function showMenu(){
    console.log('1. Danh sách liên hệ');
    console.log('2. Thêm dữ liệu danh bạ');
    console.log('3. Sửa dữ liệu danh bạ');
    console.log('4. Xóa dữ liệu danh bạ');
    console.log('5. Tìm kiếm danh bạ');
    console.log('6. Thoát');

    var option = readlineSync.question('=>');
    switch (option) {
        case '1':
        showContacts();
        showMenu();
        break;
        case '2':
        addContacts();
        showMenu();
        break;
        case '3':
        editContacts();
        showMenu()
        break;
        case '4':
        deleteContacts();
        showMenu();
        break;
        case '5' :
        searchContacts();
        showMenu();
        break;
        case '6':
        break;
        default:
        console.log('Vui lòng chọn lại');
        showMenu();
        break;
    }
}

function showContacts(){
    for (contact of phoneList) {
    console.log('Stt: '+contact.id+'  '+'Tên: '+contact.name+'  '+'Số điện thoại: '+contact.phoneNumber);
    }
}
function addContacts() {
    var name = readlineSync.question('Nhập họ và tên: ');
    var phoneNumber = readlineSync.question('Nhập số điện thoại: ');
    var contact = {
        id: phoneList.length + 1,
        name: name,
        phoneNumber: parseInt(phoneNumber)
    }
    phoneList.push(contact);
    var content = JSON.stringify(phoneList);
    fs.writeFileSync('./dataphone.json', content, {encoding:'utf8'});
}
function editContacts(){
    showContacts();
    console.log("Nhập id liên hệ cần thay đổi");
    let ans = readlineSync.question(">");
    ans = Number(ans);
    let obj =phoneList[ans-1];
    let newPhone = readlineSync.question("Nhập số mới: ("+obj.phoneNumber+"):");
    let newName = readlineSync.question("Nhập tên mới: ("+obj.name+"):");
    phoneList[ans-1].phoneNumber = newPhone;
    phoneList[ans-1].name = newName;
    fs.writeFile("./dataphone.json",JSON.stringify(phoneList),(err)=>{
      if(!err){
     return "Sửa liên hệ thành công";
      }else{
        console.log("Có lỗi xảy ra. Vui lòng thử lại");
      }
    });
    var option = readlineSync.question('Bạn cần thay đổi nữa không ? 1. Có  2.Không  ')
        if (option===1) {
            console.log(editContacts);
         } else if(option===2) {
             console.log(showmenu);
         };
};
function deleteContacts(){
    console.log('Nhập id cần xóa: ');
    var id_del = readlineSync.question('=>');
    var del = Number(id_del - 1);
    phoneList.splice(del,1,{id: id_del,name:'đã xóa',phoneNumber:'đã xóa'});
    fs.writeFile("./dataphone.json",JSON.stringify(phoneList),(err)=>{
        if(!err){
       return "Xóa liên hệ thành công";
        }else{
          console.log("Có lỗi xảy ra. Vui lòng thử lại");
        }
      });
      var option2 = readlineSync.question('Bạn cần thay đổi nữa không ? 1. Có  2.Không  ')
        if (option2===1) {
            console.log(editContacts);
         } else if(option2===2) {
             console.log(showmenu);
         };
};

function searchContacts() {
    console.log('Nhập tên hoặc số điện thoại để tìm: ');
    var qs = readlineSync.question('=>');
    search(phoneList,qs);
    function search(phoneList,qs){
        if(!isNaN(qs)){
           qs = Number(qs);
           for(x of phoneList){
             if(Number(x.phoneNumber)- Number(qs)===0){  
              console.log('Stt: '+x.id+'  '+'Tên: '+x.name+'  '+'Số điện thoại: '+x.phoneNumber);
             }
           }
           //showContacts();
        }else{
          qs = qs.toString();
          for(x of phoneList){
            if(change_alias(x.name).toLowerCase().indexOf(change_alias(qs).toLowerCase())>=0){
              console.log('Stt: '+x.id+'  '+'Tên: '+x.name+'  '+'Số điện thoại: '+x.phoneNumber);
            }
          }
          showContacts();
        }
}
};

function change_alias(alias) {
    var str = alias;
   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.trim(); 
    return str;
};
function main () {
    loadData();  
    showMenu();
    
}

main()