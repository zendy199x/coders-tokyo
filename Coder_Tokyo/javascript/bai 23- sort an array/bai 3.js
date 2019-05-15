/**
 * Sort an array from shortest string to longest
 */
function lengthSort(arr) {
    console.log(arr.sort((a, b) => a.length - b.length))
  
}

lengthSort(["dog", "wolf", "by", "family", "eaten"]) 
// ["by", "dog", "wolf", "eaten", "family"] 
// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length