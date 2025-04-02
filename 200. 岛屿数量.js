/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length
    const n = grid[0].length
    function dfs(i,j){
      // 出界，或者不是 '1'，就不再往下递归
      if(i<0 || i>m || j<0 || j>n || grid[i][j] !== '1') return 
      // 给岛屿插旗！避免来回横跳无限递归
      grid[i][j] = '2'
      dfs(i,j-1) // 向左
      dfs(i,j+1) // 向右
      dfs(i-1,j) // 向上
      dfs(i+1,j) // 向下
    }

    let count = 0
    for(let i=0;i<m;i++){
      for(let j=0;j<n;j++){
        // 如果是岛屿，就遍历岛屿，然后结果加1
        if(grid[i][j] === "1"){
          dfs(i,j)
          count++
        }
      }
    }
    return count
};