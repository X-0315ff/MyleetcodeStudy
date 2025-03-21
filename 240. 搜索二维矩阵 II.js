/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Z字法：关键步骤--位置从右上角开始，向下向左移动来寻找目标值
// 移动方法 ： 当当前位置的值大于目标值时，说明这一列没有目标值了，向左移动；当当前位置的值小于目标值时，由于是升序排列，从右向左比较，说明这一行没有目标值了，向下移动
var searchMatrix = function(matrix, target) {
  let m = matrix.length,n = matrix[0].length
  let x = 0, y = n - 1
  while(x < m && y >= 0){
      if(matrix[x][y] === target){
          return true
      }else
      if(matrix[x][y] > target){
          y--
      }else{
          x++
      }
  }
  return false
};
matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
target = 5
searchMatrix(matrix,target)