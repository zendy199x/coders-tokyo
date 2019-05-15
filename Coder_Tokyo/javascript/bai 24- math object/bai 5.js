/*
  Viết hàm rightTriangle để kiểm tra 3 cạnh của một tam giác và cho biết đó có phải là tam giác vuông hay không? 
    Nếu có thì in ra "Yes"
    Không thì in ra "No"
*/

function rightTriangle(a, b, c) {
 var random = [a, b, c];
 var sorted = random.sort(( a, b) => a - b);
 if ( Math.pow(sorted[2],2) === Math.pow(sorted[1],2) + Math.pow(sorted[0],2)) {
    console.log("Yes")
    };
 if ( Math.pow(sorted[2],2) !== Math.pow(sorted[1],2) + Math.pow(sorted[0],2)) {
    console.log("No")
    };
};

rightTriangle(3, 4, 5); // "Yes"

rightTriangle(1, 2, 3); // "No"