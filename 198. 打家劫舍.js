/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划：对于当前房间k(k>2)如果偷就不能偷k-1间，那么偷窃总额和就是前k-2间房的总金额 + 第k间房 
//                           如果不偷第k间，那么偷窃总额和就是前k-1间房的总金额。然后取两者的最大值                           
// [2,7,31,5,1,21,3,1,4,5,1,9,4,]
var rob = function(nums) {
    if(nums.length === 0 ) return  0
    if(nums.length === 1 ) return  nums[0]
    if(nums.length === 2 ) return  Math.max(nums[0],nums[1])
    // 对于k>2房间：
    // 初始化
    let pre2 = nums[0]                      // 偷到第 i-2 间房的最大钱数
    let pre1 = Math.max(nums[0], nums[1]); // 偷到第 i-1 间房的最大钱数
    for(let i = 2; i < nums.length; i++){
      let current = Math.max(nums[i]+pre2,pre1)
      // 往前推进
      pre2 = pre1
      pre1 = current
    }
    return pre1
};
nums = [2,7,9,3,1]
rob(nums)