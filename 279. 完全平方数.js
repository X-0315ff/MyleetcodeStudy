/**
 * @param {number} n
 * @return {number}
 */
// dp[i]表示组成数字i所需要的最少完全平方数的个数。
// dp[i] = min(dp[i], dp[i - j²] + 1)
// 我现在要组成数字 i，我尝试使用一个平方数 j²，剩下的部分就交给 dp[i - j²] 来搞，然后再加上这一个平方数（+1）就行了。

function numSquares(n) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0; // base case：组成0需要0个完全平方数

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  // console.log(dp[n]);
  
  return dp[n];
}
// 12 = 4 + 4 + 4
let n = 12
numSquares(n)
// console.log(Math.sqrt(12));
