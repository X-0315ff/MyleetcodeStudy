/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 每一行是升序：往右越大
// 每一列是升序：往下越大
// 正确做法，从右上角开始搜索，向左向下遍历
var searchMatrix = function(matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  let i = 0
  let j = n - 1
  while(i < m && j >= 0){
    if(matrix[i][j] === target ) return true
    else if(matrix[i][j] < target) i++
    else j--
  }
  return false
};


//太慢了，O（mn）时间度
// var searchMatrix = function(matrix, target) {
//     const m = matrix.length
//     const n = matrix[0].length
//     for(let i = 0; i < m; i++ ){
//       for(let j = 0; j < n; j++){
//         if(matrix[i][j] === target) return true
//       }
//     }
//     return false
// };