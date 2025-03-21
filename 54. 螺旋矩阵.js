/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 按层模拟法：首先输出最外层的元素，其次输出次外层的元素，直到输出最内层的元素。
var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
      return [];
  }

  const rows = matrix.length, columns = matrix[0].length;
  const order = [];
  let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
  while (left <= right && top <= bottom) {
      for (let column = left; column <= right; column++) {
          order.push(matrix[top][column]);
      }
      for (let row = top + 1; row <= bottom; row++) {
          order.push(matrix[row][right]);
      }
      if (left < right && top < bottom) {
          for (let column = right - 1; column > left; column--) {
              order.push(matrix[bottom][column]);
          }
          for (let row = bottom; row > top; row--) {
              order.push(matrix[row][left]);
          }
      }
      [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return order;
};

matrix = [[1,2,3],
          [4,5,6],
          [7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
console.log(spiralOrder(matrix));
