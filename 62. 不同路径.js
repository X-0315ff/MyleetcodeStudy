/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 动态规划：定义一个二维数组dp[i][j]，表示：从起点 (0,0) 走到位置 (i,j) 有多少条路径。
// 要走到 dp[i][j]，只有两个方向：
// 从上面来：dp[i-1][j]
// 从左边来：dp[i][j-1]
// 所以状态转移方程： dp[i][j] = dp[i-1][j] + dp[i][j-1]
var uniquePaths = function(m, n) {
  // 创建一个m * n 的dp数组
  const dp = Array.from({length:m},() =>  Array(n).fill(0))
  // 初始化第一行和第一列
  for(let i = 0; i < n; i++){ dp[0][i] = 1}
  for(let j = 0; j < m; j++){ dp[j][0] = 1}
  // 从（1，1）开始填表
  for(let i = 1; i < m; i++){
    for(let j = 1; j < n; j++){
      dp[i][j] = dp[i-1][j] + dp[i][j - 1]
    }
  }
  return dp[m-1][n-1]
};