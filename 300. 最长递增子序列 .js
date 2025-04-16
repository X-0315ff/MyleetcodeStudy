/**
 * @param {number[]} nums
 * @return {number}
 */
// 状态转移方程：dp[i] = Math.max(dp[i], dp[j] + 1)
// dp[i] 表示：以 nums[i] 结尾的最长递增子序列的长度。
// 初始值：每个数本身可以成为一个序列，所以 dp[i] = 1
// 遍历 j 在 0 ~ i-1，如果 nums[j] < nums[i]：
// 就可以接在 nums[j] 的递增子序列后面
var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1)
    for(let i = 1; i < nums.length; i++){
      for(let j = 0; j < i; j++){
        if(nums[j] < nums[i]){
          dp[i] = Math.max(dp[i],dp[j] + 1)
        }
      }
    }
    return Math.max([...dp])
};