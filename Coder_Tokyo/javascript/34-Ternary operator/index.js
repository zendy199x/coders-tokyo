function tossCoin(){
    var value = Math.random();
    var result = (value < 0.5) ? 'Mặt sấp'/*true*/ : 'Mặt ngửa'/*false*/;
    // if (value < 0.5) {
    //     result = 'Mặt sấp';
    // } else {
    //     result = 'Mặt ngửa';
    // }
    console.log(result);
}
tossCoin();