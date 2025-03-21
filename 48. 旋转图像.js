/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 1 2 3    （水平翻转）     7 8 9      主对角线（做上到右下）翻转       7 4 1                             
// 4 5 6        ==>         4 5 6                 ==>                 8 5 2                         
// 7 8 9                    1 2 3                                     9 6 3                    

var rotate = function(matrix) {
  // 第一步：水平翻转
  const n = matrix.length
  for( let i = 0; i < Math.floor(n / 2); i++ ){
    for( let j = 0; j < matrix.length; j++ ){
      [matrix[i][j],matrix[n - 1 - i][j]] = [matrix[n - 1 - i][j],matrix[i][j]]
    }
  }
  // console.log(matrix);
  // 第二步：主对角线翻转
  for(let i= 0; i < n; i++){
    for(let j = 0; j < i; j++){
      [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
    }
  }
  console.log(matrix);

  
};
matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotate(matrix));