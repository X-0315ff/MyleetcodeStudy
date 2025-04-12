/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 初始化最大利润
    let maxProfit = 0
    // 初始化最小成本
    let mincost = prices[0]
    for(let i = 0;i < prices.length; i++){
      if(prices[i] < mincost){
        mincost = prices[i]
      }
      // 记录利润大于0
      if(prices[i] - mincost > 0){
      // 记录最大利润
        if(prices[i] - mincost > maxProfit){
          maxProfit = prices[i] - mincost
        }
      }
    }
    return maxProfit
};
prices = [7,5,4,3,6,1]

console.log(maxProfit(prices));
