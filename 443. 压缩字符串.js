/**
 * @param {character[]} chars
 * @return {number}
 */
// 双指针法
var compress = function(chars) {
  let read = 0 , write = 0
  while(read < chars.length){
    let start = read
    let char = chars[start]

    // 移动指针read
    while(read < chars.length && chars[read] === char){
      read++
    }

    // 当前字符出现的次数
    let count = read - start
    // 写入字符，并将 write 向后移动一位
    chars[write++] = char

    if(count > 1){
      // 将 count 转为字符串后逐位写入数组
      for(let c of count.toString()){
        chars[write++] = c
      }
    }
  }
  return write
}



// function compress(chars) {
//     let read = 0, write = 0;

//     while(read < chars.length) {
//       let start = read;
//       let char = chars[start];

//       while(read < chars.length && chars[read] === char) {
//         read++;
//       }

//       let count = read - start
//       chars[write++] = char

//       if(count > 1) {
//         for(let c of count.toString()) {
//           chars[write++] = c
//         }
//       }
//     }
//     return write

// }

const chars = ["a","a","b","b","c","c","c"]
console.log(compress(chars))