/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 第一步：nums数组总和是否为偶数，奇数不能平分，因为nums是正整数数组
// 第二步：在nums中找到某几个数和是否等于nums的一半
// 状态转移方程： dp[j] = dp[j] || dp[j - nums]
// dp[j]表示是否可以选出一些数，使它们的和为 j
// 当拿到一个新的num时，我有两个选择：
//         如果dp[j]是true，就不用选这个num
//         如果选这个num，那就看能不能凑出 j - num,如果可以，那加上这个 num 就可以凑出 j → dp[j] = dp[j - num]
var canPartition = function(nums) {
    const sum = nums.reduce((a,b) => a + b,0)
    if(sum % 2 !== 0 ) return false
    // 找到一个子集，和为tag
    const tag = sum / 2 
    // 初始化dp数组
    const dp = new Array(tag + 1).fill(false)
    // 表示什么也不选就能凑出0
    dp[0] = true
    // 遍历每个num
    for(let num of nums){
      // 关键：从后往前便利，避免重复使用num
      for(let j = tag; j >=num; j--){
        dp[j] = dp[j] || dp[j - num]
      }
    }
    return dp[tag]
};