/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 二维动态规划：
var minDistance = function(word1, word2) {
    const m = word1.length
    const n = word2.length
    // 创建一个 (m+1) 行 × (n+1) 列 的二维数组 dp
    const dp = Array.from({length : m + 1}, () => Array(n + 1).fill(0))

    // 初始化第一行和第一列
    for(let i = 0; i <= n;i++) dp[0][i] = i  // 表示word1从空字符添加字符到word2需要几次
    for(let j = 0; j <= m;j++) dp[j][0] = j  // 表示word1删除字符到空字符需要几次

    // 从dp（1，1）开始填表
    for(let i = 1; i <= m; i++){
      for(let j = 1; j <= n; j++){
        if(word1[i - 1] === word2[j - 1]){
          // 如果当前字符相等，不需要编辑操作
          dp[i][j] = dp[i - 1][j - 1];
        }else {
          // 如果两个字符不相等，有三种方式：删除、插入、替换
          dp[i][j] = 1 + Math.min(
            // 删除：把word1当前的最后字符删除变成word2，说明上一步word1已经等于word2，再加上一步删除操作
            dp[i -1][j],
            // 插入：当前word1需要插入一个字符变成word2，说明word2上一步等于当前word1，然后再加上word1的一步插入
            dp[i][j - 1],
            // 替换： 即word1与word2最后字符都不相同，需要同时回到上一步，再加上这一步的替换
            dp[i -1][j - 1]
          )
        }
      }
    }
    return dp[m][n]
};