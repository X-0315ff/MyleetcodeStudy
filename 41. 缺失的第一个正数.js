/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length
    // Step 1: 把数字放到该去的位置（交换）（x 应该在 x-1 位置）
    for(let i = 0; i< n; i++){
      while(
        nums[i] > 0 &&
        nums[i] <= n &&
        nums[nums[i] - 1] != nums[i]
      ){
        let temp = nums[i]
        nums[i] = nums[temp - 1]
        nums[temp - 1] = temp
      }
    }

    // Step 2: 找第一个 nums[i] !== i + 1 的下标
    for (let i = 0; i < n; i++) {
      if (nums[i] !== i + 1) {
        return i + 1;
      }
    }
    // 都在该在的位置 ，缺失的是 n+1
    return n + 1
};