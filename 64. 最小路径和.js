/**
 * @param {number[][]} grid
 * @return {number}
 */
// 动态规划：定义dp[i][j],表示走到（i，j）的最小路径和，因为只能从左边或上边来：
// dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j],dp[i][j - 1])
var minPathSum = function(grid) {
    const m = grid.length
    const n = grid[0].length
    const dp = Array.from({length:m},()=>Array(n).fill(0))
    // 1. 初始化：
    dp[0][0] = grid[0][0]
    // 第一行，只会从左边过来
    for(let i = 1; i < n; i++){
      dp[0][i] = dp[0][i - 1] + grid[0][i]
    }
    // 第一列，只会从上边过来
    for(let j = 1; j < m; j++){
      dp[j][0] = dp[j - 1][0] + grid[j][0]
    }
    // 从（1，1）开始填表
    for(let i = 1; i < m; i++){
      for(let j = 1; j < n; j++){
        dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j],dp[i][j - 1])
      }
    }
    return dp[m -1][n -1]
};