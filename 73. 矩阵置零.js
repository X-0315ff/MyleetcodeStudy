/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length
    const n = matrix[0].length
    const row = []
    const col = []
    // 遍历矩阵，将0所在的行和列记录下来
    for(let i = 0; i < m; i++){
      for(let j = 0; j < n; j++){
        if(matrix[i][j] === 0){
          row.push(i)
          col.push(j)
        }
      }
    }
    // 将0所在的行置0
    for(let i = 0; i < row.length; i++){
      for(let j = 0; j < n; j++){
        matrix[row[i]][j] = 0
      }
    }
    // 将0所在的列置0
    for(let i = 0;i < col.length; i++){
      for(let j = 0; j < m; j++){
        matrix[j][col[i]] = 0
      }
    }
    // console.log(matrix);
};
matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(matrix)