/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 状态方程：dp[i] = Math.min(dp[i], dp[i - coin] + 1)
// dp[i] = Math.min(dp[i], dp[i - coin] + 1) 中的 dp[i] 是“保留之前所有方案中最小值”，否则就会被后面的方案覆盖掉。
var coinChange = function(coins, amount) {
  if(amount === 0) return 0
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for(let i = 1; i <= amount; i++ ){
    for(let coin of coins){
      if( i >= coin){
        dp[i] = Math.min(dp[i],dp[i - coin] + 1)
      }
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount]
    
};
coins = [1,2]
amount = 11
console.log(coinChange(coins,amount));
