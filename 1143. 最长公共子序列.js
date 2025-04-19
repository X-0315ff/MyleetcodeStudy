/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// 动态规划：dp[i][j] 表示的是text1[0..i-1] 和 text2[0..j-1] 的最长公共子序列的长度
// 也就是说，它表示的是：
// text1 的前 i 个字符（从下标 0 到 i-1）
// 和 text2 的前 j 个字符（从下标 0 到 j-1）
// 它们之间，能组成多长的公共子序列。
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length
    const n = text2.length

    // 创建一个(m + 1) * (n + 1)的dp数组，初始值为0
    // 为什么要多一行一列?  是为了把下标 0 当成“空字符串”处理
    // 第 0 行 = text1 是空字符串时的情况,第 0 列 = text2 是空字符串时的情况
    // 所以 dp[0][*] = 0, dp[*][0] = 0,这能让我们在处理边界时，不用特判，很方便
    const dp = Array.from({length:m+1},() => Array(n + 1).fill(0))
    // 填充dp表，从（1，1）开始
    for(let i = 1; i <= m; i++){
      for(let j = 1; j <= n; j++){
        if(text1[i -1] === text2[j - 1]){
          // 当前字符相等，说明可以作为公共子序列的一部分
          dp[i][j] = dp[i -1][j -1] + 1
        }else {
          dp[i][j] = Math.max(dp[i -1][j],dp[i][j - 1])
        }
      }
    }
    // 最终结果保存在右下角
    return dp[m][n];
};