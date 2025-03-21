/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 前缀和 + 哈希表
var subarraySum = function(nums, k) {
   let count = 0
   let sum = 0
   const sumcount = new Map()
   // 重要：0这个key是必须的，否则无法判断前缀和为0的情况，说明0到当前位置就是一个子数组，应该提前记录一次才对
   sumcount.set(0,1)
   for(let i = 0; i < nums.length; i++){
    sum += nums[i]
    if(sumcount.has(sum - k)){
      count += sumcount.get(sum - k)
    }
    // 更新次数
    // 解释：如果当前前缀和没有到过，则先赋值为0，然后加1，
    //       如果当前前缀和之前出现过，则次数加1
    sumcount.set(sum, (sumcount.get(sum) || 0 )+ 1)
    
   }
   return count
};
nums = [1,-1,0]
k = 0
console.log(subarraySum(nums, k));