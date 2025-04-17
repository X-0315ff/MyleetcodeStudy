/**
 * @param {number[]} nums
 * @return {number}
 */
// 最大乘积子数组的难点在于：负数相乘可能变成正数，最小值可能反转为最大值。
// 所以在标准做法中，必须同时维护两个数组（或者变量）：
//                maxDp[i]: 到第 i 个位置的最大乘积
//                minDp[i]: 到第 i 个位置的最小乘积（因为负负得正）
var maxProduct = function(nums) {
  let maxProd = nums[0]; // 当前最大
  let minProd = nums[0]; // 当前最小
  let result = nums[0];  // 最终结果
  for(let i = 1; i < nums.length; i++){
    // 临时变量记录旧的最大值
    let tempMax = maxProd
    maxProd = Math.max(nums[i],nums[i] * maxProd,nums[i] * minProd)
    minProd = Math.min(nums[i],nums[i] * tempMax,nums[i] * minProd)

    result = Math.max(result,maxProd)
  }
  return result
};
nums = [2,3,-2,4]
console.log(maxProduct(nums));
