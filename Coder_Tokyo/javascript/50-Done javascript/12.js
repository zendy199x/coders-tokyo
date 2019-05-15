function difference(n) {
    //Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu số đó và 13,
    // nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
    var diff = n -13;
    if (diff > 0) {
        return diff*2
    } return Math.abs(diff)
    }

    var answer = difference(14);
    console.log(answer);
    